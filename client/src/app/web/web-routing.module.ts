import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { Routes,RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";



const routes: Routes = [
    {
        path:'home', component:HomeComponent,
        children:[//rutas protegidas o rutas hijas
            {path:'',component:HomeComponent},
            {path:'about',component:AboutComponent},
            {path:'contact',component:ContactComponent},
            {path:'products',component:ProductsComponent},{path:'',component:HomeComponent},
        ]
    }
]


@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ]
  })
  export class WebRoutingModule { }