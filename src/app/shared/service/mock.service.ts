import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private readonly apiUrl = 'api';
  constructor(private http: HttpClient) {}

  listUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`, { withCredentials: false });
  }
}
