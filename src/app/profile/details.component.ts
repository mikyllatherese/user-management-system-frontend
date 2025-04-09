import { Component } from '@angular/core';

<<<<<<< HEAD
import { AccountService } from '../../app/_services';
=======
import { AccountService } from '../_services';
>>>>>>> Dinauanao-tester-functional-testing

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
<<<<<<< HEAD
}
=======
}
>>>>>>> Dinauanao-tester-functional-testing
