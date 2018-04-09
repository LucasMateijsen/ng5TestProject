import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { JwtHelper } from 'angular2-jwt';
import { debug } from 'util';

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: '',
    domain: '',
    responseType: '',
    audience: '',
    redirectUri: '',
    scope: ''
  });
  private _scopes: string[] = null;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }
  
  public handleAuthentication(): void {
    let self = this;
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        if (authResult.idToken === null && authResult.scope && authResult.scope !== "") {
          self.scopes = authResult.scope.split(' ');
        }
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
        debugger;
        this.userHasScope("");
      } else if (err) {
        this.router.navigate(['/']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this._scopes = null;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  set scopes(value: string[]) {
    this._scopes = value;
  }

  get scopes(): string[] {
    if (!this._scopes) {
        console.log("auth.service: Scopes is empty, getting from LS");
        this._scopes = this.getScopes();
    }
    return this._scopes;
  }

  public getScopes(): Array<string> {
    const token = localStorage.getItem('access_token');
    if (!token) return null;
    const helper = new JwtHelper();
    const result = helper.decodeToken(token);
    // return  result['scope'];
    let res = result['scope'].split(' ');
    console.log(res);
    return res;
  }

  public userHasScope(scope: string): boolean {
    const grantedScopes = this.scopes;
    return grantedScopes.indexOf(scope) > -1;
  }

}