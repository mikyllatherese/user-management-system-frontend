import { Component } from '@angular/core';

<<<<<<< HEAD
import { AccountService } from '../../app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account: any;
    constructor(private accountService: AccountService) {
        this.account = this.accountService.accountValue;
    }
=======
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;
  
    constructor(private accountService: AccountService) { }
>>>>>>> Dinauanao-tester-functional-testing
}