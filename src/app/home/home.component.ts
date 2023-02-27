import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: Array<any> = [];
  constructor(private http: HttpClient) {
    this.getJsonValue = [];
  }
  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1'
      )
      .subscribe((data: any) => {
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
