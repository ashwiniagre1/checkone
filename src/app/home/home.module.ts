/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/templ', loadChildren: './../pages/checkone/core/templ/templ.module#TemplModule'
     	},	
	     	{
     	path: 'core/sass', loadChildren: './../pages/checkone/core/sass/sass.module#SassModule'
     	},	
	     	{
     	path: 'core/loginupadte', loadChildren: './../pages/checkone/core/loginupadte/loginupadte.module#LoginupadteModule'
     	},	
	     	{
     	path: 'core/horizontal', loadChildren: './../pages/checkone/core/horizontal/horizontal.module#HorizontalModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}