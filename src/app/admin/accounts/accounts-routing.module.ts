<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
>>>>>>> Dinauanao-tester-functional-testing

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: ListComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
=======
    {path: '', component: ListComponent},
    {path: 'add', component: AddEditComponent},
    {path: 'edit/:id', component: AddEditComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }
>>>>>>> Dinauanao-tester-functional-testing
