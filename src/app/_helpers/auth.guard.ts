import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

<<<<<<< HEAD
import { AccountService } from '../../app/_services';
=======
import { AccountService } from '../_services';
>>>>>>> Dinauanao-tester-functional-testing

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const account = this.accountService.accountValue;
        if (account) {
            // check if route is restricted by role
            if (route.data.roles && !route.data.roles.includes(account.role)) {
                // role not authorized so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            // authorized so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
<<<<<<< HEAD
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
=======
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
>>>>>>> Dinauanao-tester-functional-testing
        return false;
    }
}
