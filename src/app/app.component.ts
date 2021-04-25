import { environment } from './../environments/environment';
import { Component, OnDestroy } from '@angular/core';
import { MockService } from './shared/service/mock.service';
import { HttpCancelService } from './shared/service/http-cancel-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  env = environment.version;
  list = [];

  constructor(private _mock: MockService, private _httpCancelService: HttpCancelService, ) {
    this.listar();
  }

  ngOnDestroy(): void {
    this._httpCancelService.cancelPendingRequests();
  }

  click(): void {
    this.ngOnDestroy();
  }

  listar(): any {
    this._mock.listUsers()
    .subscribe((res: any) => {
      this.list = res;
    });
  }

}
