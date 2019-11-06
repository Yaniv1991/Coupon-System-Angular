import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { ClientType } from '../models/clientType';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private user: User;

    private loginUrl = `http://localhost:8080/Login`;
    constructor(private http: HttpClient) { }

    public getClientType(): ClientType {
        if (this.user) {
            return this.user.clientType;
        }
        return ClientType.COMPANY;
    }

    login(email: string, password: string, clientType: ClientType) {
      this.user = {email, password, clientType};
      this.http.post<User>(this.loginUrl, this.user, {withCredentials: true}).subscribe(userFromDB => this.user = userFromDB);
    }

    logout() {
        this.http.get(`/Logout`).subscribe();
    }
}
