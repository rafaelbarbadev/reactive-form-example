import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCancelService {

  private _cancelPendingRequests = new Subject<void>();

  public cancelPendingRequests(): void {
    this._cancelPendingRequests.next();
  }

  public onCancelPendingRequests(): Observable<any> {
    return this._cancelPendingRequests.asObservable();
  }

}
