import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { ClientType } from '../models/clientType';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private user: User;
    private cookieServ: CookieService; //??

    private loginUrl = `http://localhost:8080/Login`;
    constructor(private http: HttpClient) { }

    public getClientType(): ClientType {
        if(this.user){
            return this.user.clientType;
        }
        return ClientType.CUSTOMER;
    }

    login(email: string, password: string,clientType: ClientType) {
        this.user = {"email" : email,"password" : password, "clientType" : clientType};
        // alert(this.user.clientType);
      this.http.post<User>(this.loginUrl, this.user,{withCredentials: true}).subscribe(userFromDB => this.user = userFromDB);
    }

    logout() {
        this.http.get(`/Logout`).subscribe();
        this.cookieServ.delete('UserEmail', this.user.email);
    }
}
