import { Component } from '@angular/core';
<<<<<<< HEAD
import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  Role = Role;
  account: Account;

  constructor(private accountService: AccountService) {
    this.accountService.account.subscribe(x => this.account = x);
  }

  logout() {
    this.accountService.logout();
  }
=======

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    Role = Role;
    account: Account;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }
>>>>>>> Dinauanao-tester-functional-testing
}