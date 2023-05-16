import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        DashboardComponent,
        ProductsComponent,
        CategoriesComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProductsComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
