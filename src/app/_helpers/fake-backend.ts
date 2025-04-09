import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { AlertService } from '../../app/_services';
import { Role } from '../../app/_models';

const accountsKey = 'angular-10-signup-verification-boilerplate-accounts';
let accounts = JSON.parse(localStorage.getItem(accountsKey) || '[]');

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        const alertService = this.alertService;

=======
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { AlertService } from '@app/_services';
import { Role } from '@app/_models';

// array in local storage for accounts
const accountsKey = 'angular-to-sign-on-verification-boilerplate-accounts';
let accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        
>>>>>>> Dinauanao-tester-functional-testing
        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/accounts/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/accounts/refresh-token') && method === 'POST':
                    return refreshToken();
                case url.endsWith('/accounts/revoke-token') && method === 'POST':
                    return revokeToken();
                case url.endsWith('/accounts/register') && method === 'POST':
                    return register();
                case url.endsWith('/accounts/verify-email') && method === 'POST':
                    return verifyEmail();
                case url.endsWith('/accounts/forgot-password') && method === 'POST':
                    return forgotPassword();
                case url.endsWith('/accounts/validate-reset-token') && method === 'POST':
                    return validateResetToken();
                case url.endsWith('/accounts/reset-password') && method === 'POST':
                    return resetPassword();
                case url.endsWith('/accounts') && method === 'GET':
                    return getAccounts();
                case url.match(/\/accounts\/\d+$/) && method === 'GET':
                    return getAccountById();
                case url.endsWith('/accounts') && method === 'POST':
                    return createAccount();
                case url.match(/\/accounts\/\d+$/) && method === 'PUT':
                    return updateAccount();
                case url.match(/\/accounts\/\d+$/) && method === 'DELETE':
                    return deleteAccount();
                default:
                    return next.handle(request);
            }
        }

<<<<<<< HEAD
        // role functions

=======
        // Route functions
>>>>>>> Dinauanao-tester-functional-testing
        function authenticate() {
            const { email, password } = body;
            const account = accounts.find(x => x.email === email && x.password === password && x.isVerified);

            if (!account) return error('Email or password is incorrect');
<<<<<<< HEAD
            // add refresh token to account
=======

>>>>>>> Dinauanao-tester-functional-testing
            account.refreshTokens.push(generateRefreshToken());
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok({
                ...basicDetails(account),
                jwtToken: generateJwtToken(account)
            });
        }

<<<<<<< HEAD

        function refreshToken() {
            const refreshToken = getRefreshToken();

            if (!refreshToken) return unauthorized();

            const account = accounts.find(x => x.refreshTokens.includes(refreshToken));

            if (!account) return unauthorized();

            // replace old refresh token with new one and save
=======
        function refreshToken() {
            const refreshToken = getRefreshToken();
            if (!refreshToken) return unauthorized();

            const account = accounts.find(x => x.refreshTokens.includes(refreshToken));
            if (!account) return unauthorized();

            // replace old refresh token with new one
>>>>>>> Dinauanao-tester-functional-testing
            account.refreshTokens = account.refreshTokens.filter(x => x !== refreshToken);
            account.refreshTokens.push(generateRefreshToken());
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok({
                ...basicDetails(account),
                jwtToken: generateJwtToken(account)
            });
        }

        function revokeToken() {
            if (!isAuthenticated()) return unauthorized();

            const refreshToken = getRefreshToken();
            const account = accounts.find(x => x.refreshTokens.includes(refreshToken));
<<<<<<< HEAD

=======
            
            if (!account) return unauthorized();

            // revoke token and save
>>>>>>> Dinauanao-tester-functional-testing
            account.refreshTokens = account.refreshTokens.filter(x => x !== refreshToken);
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok();
        }

        function register() {
            const account = body;

            if (accounts.find(x => x.email === account.email)) {
                setTimeout(() => {
<<<<<<< HEAD
                    alertService.info(
                        `<h4>Email Already Registered</h4>
                    <p>Your email ${account.email} is already registered.</p>
                    <p>If you don't know your password please visit the <a href="${location.origin}/account/forgot-password">forgot password</a> page.</p>
                    <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>`,
                        { autoClose: false }
                    );
                }, 1000);

                return ok();
            }

            account.id = newAccountId();
            if (account.id === 1) {
                account.role = Role.Admin;
            }
            else {
                account.role = Role.User;
            }
=======
                    this.alertService.info(`
                        <h4>Email Already Registered</h4>
                        <p>Your email ${account.email} is already registered</p>
                        <p>If you don't know your password please visit the 
                        <a href="${location.origin}/account/forgot-password">forgot password</a> page.</p>
                        <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an API.</div>`,
                    { autoClose: false });
                }, 1000);
                return ok();
            }

            // assign account id and properties
            account.id = newAccountId();
            account.role = account.id === 1 ? Role.Admin : Role.User;
>>>>>>> Dinauanao-tester-functional-testing
            account.dateCreated = new Date().toISOString();
            account.verificationToken = new Date().getTime().toString();
            account.isVerified = false;
            account.refreshTokens = [];
            delete account.confirmPassword;
            accounts.push(account);
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

<<<<<<< HEAD

            // display verification email in alert
            setTimeout(() => {
                const verifyUrl = `${location.origin}/account/verify-email?token=${account.verificationToken}`;
                alertService.info(
                    `<h4>Verification Email</h4>
                <p>Thanks for registering!</p>
                <p>Please click the below link to verify your email address:</p>
                <p><a href="${verifyUrl}">${verifyUrl}</a></p>
                <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>`,
                    { autoClose: false }
                );
=======
            setTimeout(() => {
                const verifyUrl = `${location.origin}/account/verify-email?token=${account.verificationToken}`;
                this.alertService.info(`
                    <h4>Verification Email</h4>
                    <p>Thanks for registering!</p>
                    <p>Please click the link below to verify your email address:</p>
                    <p><a href="${verifyUrl}">${verifyUrl}</a></p>
                    <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an API.</div>`,
                { autoClose: false });
>>>>>>> Dinauanao-tester-functional-testing
            }, 1000);

            return ok();
        }

        function verifyEmail() {
            const { token } = body;
            const account = accounts.find(x => !!x.verificationToken && x.verificationToken === token);

            if (!account) return error('Verification failed');

            account.isVerified = true;
            localStorage.setItem(accountsKey, JSON.stringify(accounts));
<<<<<<< HEAD

=======
>>>>>>> Dinauanao-tester-functional-testing
            return ok();
        }

        function forgotPassword() {
            const { email } = body;
            const account = accounts.find(x => x.email === email);

<<<<<<< HEAD
            if (!account) return ok();

            account.resetToken = new Date().getTime().toString();
            account.resetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            setTimeout(() => {
                const resetUrl = `${location.origin}/account/reset-password?token=${account.resetToken}`;
                alertService.info(
                    `<h4>Reset Password Email</h4>
                <p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                <p><a href="${resetUrl}">${resetUrl}</a></p>
                <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>`,
                    { autoClose: false }
                );
=======
            // always return ok response to prevent email enumeration
            if (!account) return ok();

            // create reset token that expires after 24 hours
            account.resetToken = new Date().getTime().toString();
            account.resetTokenExpires = new Date(Date.now() + 24*60*60*1000).toISOString();
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            // display reset password email
            setTimeout(() => {
                const resetUrl = `${location.origin}/account/reset-password?token=${account.resetToken}`;
                this.alertService.info(`
                    <h4>Reset Password Email</h4>
                    <p>Please click the link below to reset your password:</p>
                    <p><a href="${resetUrl}">${resetUrl}</a></p>
                    <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an API.</div>`,
                { autoClose: false });
>>>>>>> Dinauanao-tester-functional-testing
            }, 1000);

            return ok();
        }

        function validateResetToken() {
            const { token } = body;
<<<<<<< HEAD
            const account = accounts.find(x =>
                !!x.resetToken &&
                x.resetToken === token &&
=======
            const account = accounts.find(x => 
                !!x.resetToken && 
                x.resetToken === token && 
>>>>>>> Dinauanao-tester-functional-testing
                new Date() < new Date(x.resetTokenExpires)
            );

            if (!account) return error('Invalid token');
<<<<<<< HEAD

            return ok();
        }

        // Additional methods would follow the same pattern...
        function resetPassword() {
            const { token, password } = body;
            const account = accounts.find(x =>
                !!x.resetToken &&
                x.resetToken === token &&
=======
            return ok();
        }

        function resetPassword() {
            const { token, password } = body;
            const account = accounts.find(x => 
                !!x.resetToken && 
                x.resetToken === token && 
>>>>>>> Dinauanao-tester-functional-testing
                new Date() < new Date(x.resetTokenExpires)
            );

            if (!account) return error('Invalid token');

<<<<<<< HEAD
            account.password = password;
            account.resetToken = null;
            account.resetTokenExpires = null;
=======
            // update password and remove reset token
            account.password = password;
            account.isVerified = true;
            delete account.resetToken;
            delete account.resetTokenExpires;
>>>>>>> Dinauanao-tester-functional-testing
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok();
        }

        function getAccounts() {
            if (!isAuthenticated()) return unauthorized();
<<<<<<< HEAD

=======
>>>>>>> Dinauanao-tester-functional-testing
            return ok(accounts.map(x => basicDetails(x)));
        }

        function getAccountById() {
            if (!isAuthenticated()) return unauthorized();

<<<<<<< HEAD
            let account = accounts.find(x => x.id === idFromUrl());
=======
            const account = accounts.find(x => x.id === idFromUrl());
            if (!account) return error('Account not found');

            // users can get own account and admins can get any account
>>>>>>> Dinauanao-tester-functional-testing
            if (account.id !== currentAccount().id && !isAuthorized(Role.Admin)) {
                return unauthorized();
            }

            return ok(basicDetails(account));
        }

<<<<<<< HEAD

=======
>>>>>>> Dinauanao-tester-functional-testing
        function createAccount() {
            if (!isAuthorized(Role.Admin)) return unauthorized();

            const account = body;
            if (accounts.find(x => x.email === account.email)) {
                return error(`Email ${account.email} is already registered`);
            }

<<<<<<< HEAD
=======
            // assign account id and properties
>>>>>>> Dinauanao-tester-functional-testing
            account.id = newAccountId();
            account.dateCreated = new Date().toISOString();
            account.isVerified = true;
            account.refreshTokens = [];
            delete account.confirmPassword;
            accounts.push(account);
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok();
        }

        function updateAccount() {
<<<<<<< HEAD
            if (!isAuthorized(Role.Admin)) return unauthorized();

            const params = body;
            let account = accounts.find(x => x.id === idFromUrl());

            if (account.id !== currentAccount() && !isAuthorized(Role.Admin)) {
                return unauthorized();
            }

            if (params.password) {
                delete params.password;
            }

            delete params.confirmPassword;

=======
            if (!isAuthenticated()) return unauthorized();

            const params = body;
            const account = accounts.find(x => x.id === idFromUrl());
            if (!account) return error('Account not found');

            // users can update own account and admins can update any account
            if (account.id !== currentAccount().id && !isAuthorized(Role.Admin)) {
                return unauthorized();
            }

            // only update password if included
            if (!params.password) {
                delete params.password;
            }
            delete params.confirmPassword;

            // update and save account
>>>>>>> Dinauanao-tester-functional-testing
            Object.assign(account, params);
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok(basicDetails(account));
        }

        function deleteAccount() {
            if (!isAuthenticated()) return unauthorized();

<<<<<<< HEAD
            let account = accounts.find(x => x.id === idFromUrl());

            //user accounts can delete own account and admin accounts can delete any account
=======
            const account = accounts.find(x => x.id === idFromUrl());
            if (!account) return error('Account not found');

            // users can delete own account and admins can delete any account
>>>>>>> Dinauanao-tester-functional-testing
            if (account.id !== currentAccount().id && !isAuthorized(Role.Admin)) {
                return unauthorized();
            }

<<<<<<< HEAD
            //delete account then save
            accounts = accounts.filter(x => x.id !== idFromUrl());
            localStorage.setItem(accountsKey, JSON.stringify(accounts));
            return ok();
        }

        // helper functions
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); //delay observable to simulate server api call
        }

        function error(message) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(500), dematerialize());
            //call materialize and dematerialize to ensure delay even if an error is thrown 
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } })
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(account) {
=======
            // delete account
            accounts = accounts.filter(x => x.id !== account.id);
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok();
        }

        // Helper functions
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500));
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(account: any) {
>>>>>>> Dinauanao-tester-functional-testing
            const { id, title, firstName, lastName, email, role, dateCreated, isVerified } = account;
            return { id, title, firstName, lastName, email, role, dateCreated, isVerified };
        }

        function isAuthenticated() {
            return !!currentAccount();
        }

<<<<<<< HEAD
        function isAuthorized(role) {
=======
        function isAuthorized(role: Role) {
>>>>>>> Dinauanao-tester-functional-testing
            const account = currentAccount();
            if (!account) return false;
            return account.role === role;
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function newAccountId() {
            return accounts.length ? Math.max(...accounts.map(x => x.id)) + 1 : 1;
        }

        function currentAccount() {
<<<<<<< HEAD
            // check if jwt token is in auth header
            const authHeader = headers.get('Authorization');
            if (!authHeader || !authHeader.startsWith('Bearer fake-jwt-token')) return;

            //check if token is expired
            const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
            const tokenExpired = Date.now() > (jwtToken.exp * 1000);
            if (tokenExpired) return;

            const account = accounts.find(x => x.id === jwtToken.id);
            return account;
        }

        function generateJwtToken(account) {
            // create token that expires in 15 minutes
            const tokenPayload = {
                exp: Math.round(new Date(Date.now() + 15 * 60 * 1000).getTime() / 1000),
                id: account.id,
            }
=======
            // check auth header
            const authHeader = headers.get('Authorization');
            if (!authHeader?.startsWith('Bearer fake-jwt-token')) return null;

            // check if token is expired
            const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
            const tokenExpired = Date.now() > (jwtToken.exp * 1000);
            if (tokenExpired) return null;

            return accounts.find(x => x.id === jwtToken.id);
        }

        function generateJwtToken(account: any) {
            // create token that expires in 15 minutes
            const tokenPayload = { 
                exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000),
                id: account.id 
            };
>>>>>>> Dinauanao-tester-functional-testing
            return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
        }

        function generateRefreshToken() {
            const token = new Date().getTime().toString();
<<<<<<< HEAD

            // add token cookie that expires in 7 days
            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
=======
            
            // add token cookie that expires in 7 days
            const expires = new Date(Date.now() + 7*24*60*60*1000).toUTCString();
>>>>>>> Dinauanao-tester-functional-testing
            document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;

            return token;
        }

        function getRefreshToken() {
            // get refresh token from cookie
            return (document.cookie.split(';').find(x => x.includes('fakeRefreshToken')) || '=').split('=')[1];
        }
<<<<<<< HEAD

=======
>>>>>>> Dinauanao-tester-functional-testing
    }
}

export const fakeBackendProvider = {
<<<<<<< HEAD
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
=======
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
>>>>>>> Dinauanao-tester-functional-testing
