import { Injectable } from '@angular/core';

import {
HttpRequest,
HttpHandler,
HttpEvent,
HttpInterceptor,
HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('interceptor')
        
        const token = localStorage.getItem('token');
        console.log(token)
        var header = new HttpHeaders();
        header = header.append('Authorization', `Bearer ${token}`);
        console.log(header);
        const requestClone = request.clone({
            headers : header
        });
        console.log(requestClone.headers);
        return next.handle(requestClone);
    }
}