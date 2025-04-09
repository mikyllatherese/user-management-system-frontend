import { Component } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< HEAD
import { AccountService } from '../../app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.accountValue) {
            this.router.navigate(['/']);
        }
    }
}
=======
import { AccountService } from '../_services';

@Component({templateUrl: 'layout.component.html'})
export class LayoutComponent{
    constructor(
        private router: Router,
        private accountService: AccountService
    ){
        // redirect to home if logged in
        if (this.accountService.accountValue){
            this.router.navigate(['/']);
        }
    }
} 
>>>>>>> Dinauanao-tester-functional-testing
