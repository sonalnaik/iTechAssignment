import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TablecardComponent } from './tablecard/tablecard.component';



const routes: Routes = [
  { path: '', redirectTo: '/all-data', pathMatch: 'full' },
  { path: 'all-data', component: TablecardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
  
}
