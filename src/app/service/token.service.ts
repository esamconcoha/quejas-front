import { Injectable } from '@angular/core';
const USER_TOKEN = 'auth-token';
const USER_NAME = 'auth-user';
@Injectable({
  providedIn: 'root'
})

export class TokenService {

constructor() { }


public setToken(token: string): void {
  window.sessionStorage.removeItem(USER_TOKEN);
  window.sessionStorage.setItem(USER_TOKEN, token);
}

public getToken(): string {
  return sessionStorage.getItem(USER_TOKEN)!;
}


public setUserName(username: string): void {
  window.sessionStorage.removeItem(USER_NAME);
  window.sessionStorage.setItem(USER_NAME, username);
}


public getUserName(): string {
  return sessionStorage.getItem(USER_NAME)!;
}

public logOut(): void {
  window.sessionStorage.clear();
}



}
