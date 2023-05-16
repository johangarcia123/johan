import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NoFoundPageComponent } from '../noFoundPage/no-found-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes:Routes = [
  {path:'dashboard', component: PagesComponent,
  children: [
  {path:'', component: DashboardComponent},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
