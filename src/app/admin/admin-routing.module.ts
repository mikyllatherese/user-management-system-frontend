import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
<<<<<<< HEAD
import { OverViewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts-module').then(x => x.AccountsModule);

const routes: Routes = [
  {
    path: '', component: SubNavComponent, outlet: 'subnav'
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: OverViewComponent },
=======
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
  { path: '', component: SubNavComponent, outlet: 'subnav' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: OverviewComponent },
>>>>>>> Dinauanao-tester-functional-testing
      { path: 'accounts', loadChildren: accountsModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }