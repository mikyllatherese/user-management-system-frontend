import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'update', component: UpdateComponent }
    ]
  }
=======
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: DetailsComponent },
            { path: 'update', component: UpdateComponent }
        ]
    }
>>>>>>> Dinauanao-tester-functional-testing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }