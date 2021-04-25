import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpCancelService } from '../service/http-cancel-service.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CancelHttpInterceptor implements HttpInterceptor {

  constructor(private _httpCancelService: HttpCancelService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      takeUntil(this._httpCancelService.onCancelPendingRequests()),
      takeUntil(timer(environment.httpCancelTimeout))
    );
  }
}
