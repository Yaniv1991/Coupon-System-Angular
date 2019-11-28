import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { ClientType } from '../models/clientType';
import { MenuComponent } from '../components/menu/menu.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class AuthenticationService {


    private user: User;

    private loginUrl = `http://localhost:8080/Rest/Login`;
    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

    public getClientType(): ClientType {
        if (this.cookieService.check('clientType')) {
            return ClientType[this.cookieService.get('clientType')];
        }
        if (this.user) {
            return this.user.clientType;
        }
        return ClientType.CUSTOMER;
    }

    login(email: string, password: string, clientType: ClientType, success): Observable<ClientType>   {
        console.log('logging in');
        this.user = {email, password, clientType};
        this.httpClient.post<User>(this.loginUrl, this.user, {withCredentials: true}).subscribe(userFromDB => {
            if (userFromDB) {
                this.user = userFromDB;
                console.log('user is found');
                this.cookieService.set('clientType', clientType.toString());
                success();
                // tslint:disable-next-line:no-shadowed-variable
                return new Observable<ClientType>(clientType => clientType);
            } else {
                        console.log('No user is found');
                        this.cookieService.delete('clientType');
                    }
                } );
        // tslint:disable-next-line:no-shadowed-variable
        return new Observable<ClientType>( clientType => clientType) ;
    }

    logout() {
        this.httpClient.get(`/Logout`).subscribe();
        this.cookieService.delete('clientType');
    }
}
