import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  getCategorys = '';
  IMG_API = 'https://image.tmdb.org/t/p/w1280';
  public getJsonValue: any;
  constructor(private http: HttpClient) {
    this.getJsonValue = [];
  }
  ngOnInit(): void {
    this.getMethod();
  }
  public getCategory(value: string) {
    this.getCategorys = value;
    this.getMethod();
  }
  public getMethod() {
    this.http
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=466279f06d7f82ea9024d440431f8663&with_genres=${this.getCategorys}`
      )
      .subscribe((data: any) => {
        this.getJsonValue = data.results;
      });
  }
}
