import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroments.api';

@Injectable({ providedIn: 'root' })
export class DataService {
  getJsonValue: any;
  constructor(private http: HttpClient) {}

  public getMethod() {
    return this.http.get(environment.apiUrl);
  }
}
