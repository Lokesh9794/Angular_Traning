import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'./login.component.html',
})
export class LoginComponent{
    constructor(private auth:AuthService){
    }
userName:string|any;

password:string|any;
login(formValues:any){
    this.auth.loginUser(formValues.userName,formValues.password)
}


}