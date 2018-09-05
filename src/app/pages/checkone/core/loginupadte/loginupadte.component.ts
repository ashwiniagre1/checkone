/**
 * Created by: MetaMagic
 * Date: 11/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'loginupadte',
  templateUrl: 'loginupadte.component.html'
})
export class LoginupadteComponent implements OnInit{
  loginupadteModel:LoginupadteModel;
 
  constructor(private http: HttpClient) {
    this.loginupadteModel=new LoginupadteModel();
       }
  onBlur_EmailId(eventData:any){} 
  input_EmailId(eventData:any){} 
  focus_EmailId(eventData:any){} 
  onBlur_Password(eventData:any){} 
  input_Password(eventData:any){} 
  focus_Password(eventData:any){} 
  onClick_register(eventData:any){} 
  onClick_login(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class LoginupadteModel{
  EmailId: string;  Password: string; }
