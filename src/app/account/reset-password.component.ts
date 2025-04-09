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

enum TokenStatus {
    Validating,
    Valid,
    Invalid
}

@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent implements OnInit {
    TokenStatus = TokenStatus;
    tokenStatus = TokenStatus.Validating;
    token = null;
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
            password: ['', [Validators.required, Validators.minLength(6)]],
<<<<<<< HEAD
            confirmPassword: ['', Validators.required],
=======
            confirmPassword: ['', Validators.required]
>>>>>>> Dinauanao-tester-functional-testing
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

        const token = this.route.snapshot.queryParams['token'];
<<<<<<< HEAD

=======
        
>>>>>>> Dinauanao-tester-functional-testing
        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.validateResetToken(token)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.token = token;
                    this.tokenStatus = TokenStatus.Valid;
                },
                error: () => {
                    this.tokenStatus = TokenStatus.Invalid;
                }
            });
    }

<<<<<<< HEAD
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
=======
    // convience getter for easy access to form fields
    get f(){return this.form.controls;}
>>>>>>> Dinauanao-tester-functional-testing

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
<<<<<<< HEAD
        if (this.form.invalid) {
=======
        if (this.form.invalid ) {
>>>>>>> Dinauanao-tester-functional-testing
            return;
        }

        this.loading = true;
<<<<<<< HEAD
        if (this.token) {
            this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true });
                        this.router.navigate(['../login'], { relativeTo: this.route });
                    },
                    error: error => {
                        this.alertService.error(error);
                        this.loading = false;
                    }
                });
        } else {
            this.alertService.error('Invalid token');
            this.loading = false;
        }
    }
}
=======
        this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Password reset successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}  
>>>>>>> Dinauanao-tester-functional-testing
