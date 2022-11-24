import { HomeComponent } from './home/home.component';
import { PendingChangesGuard } from './guard/pending-changes.guard';
import { MyComponent } from './my/my.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-page', component: MyComponent, canDeactivate: [PendingChangesGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
