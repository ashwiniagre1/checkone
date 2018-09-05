import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Templ","routerLink":"core/templ","selected":false},{"text":"Sass","routerLink":"core/sass","selected":false},{"text":"Loginupadte","routerLink":"core/loginupadte","selected":false},{"text":"Horizontal","routerLink":"core/horizontal","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
