import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

<<<<<<< HEAD
import { AccountService, AlertService } from '../../app/_services';
import { MustMatch } from '../../app/_helpers';
=======
import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '@app/_helpers';
>>>>>>> Dinauanao-tester-functional-testing

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: UntypedFormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
<<<<<<< HEAD
    ) { }
=======
    ) {}
>>>>>>> Dinauanao-tester-functional-testing

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
<<<<<<< HEAD
                    this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
=======
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
>>>>>>> Dinauanao-tester-functional-testing
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> Dinauanao-tester-functional-testing
