import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { ClientType } from '../models/clientType';
import { MenuComponent } from '../components/menu/menu.component';


@Injectable({ providedIn: 'root'})
export class AuthenticationService {


    private user: User;

    private loginUrl = `http://localhost:8080/Login`;
    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

    public getClientType(): ClientType {
        if (this.cookieService.check('clientType')) {
            return ClientType[this.cookieService.get('clientType')];
        }
        if (this.user) {
            return this.user.clientType;
        }
        return ClientType.ADMIN;
    }

    login(email: string, password: string, clientType: ClientType) {
        this.user = {email, password, clientType};
        this.httpClient.post<User>(this.loginUrl, this.user, {withCredentials: true}).subscribe(userFromDB => this.user = userFromDB);
        this.cookieService.set('clientType', clientType.toString());
    }

    logout() {
        this.httpClient.get(`/Logout`).subscribe();
    }
}
