import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from '../static';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has("x-api-key")) {
      request = request.clone({
        headers: request.headers.set(
          "x-api-key",
          API.Key
        ),
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error && error.error.message) {
          errorMessage = `Error: ${error.error.message}`;
        }else if(error.error.errors != undefined && Array.isArray(error.error.errors)){
          for(let i in error.error.errors){
            errorMessage = error.error.errors[i];
          }
        }else {
          // server-side error
          errorMessage = `Error Code: ${error.status}`;
          if(error.status == 0){
            errorMessage = 'Ha ocurrido un error, revisa tu conexión e intenta nuevamente.'
          }
        }
        return throwError(errorMessage);
      })
    );
  }
}