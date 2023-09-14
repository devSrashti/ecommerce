import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [

{path:'home', component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact' , component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'product', component:ProductComponent},
{path:'category', component:CategoryComponent},
{path:'productlist', component:ProductlistComponent},
{path:'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
