import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public getJsonValue: any;
  constructor(private http: HttpClient) {
    this.getJsonValue = [];
  }
  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get(environment.apiUrl).subscribe((data: any) => {
      this.getJsonValue = data.results;
    });
  }

  selectPage = 'Home';

  selectPageClick(value: string) {
    this.selectPage = value;
  }
  public loading = true;
  loadingTime = setTimeout(() => {
    this.loading = false;
  }, 1000);
}
