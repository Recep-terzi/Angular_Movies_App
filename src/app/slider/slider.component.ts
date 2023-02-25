import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: Array<any> = [];
  IMG_API = 'https://image.tmdb.org/t/p/w1280';
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
        console.log(data.results);
      });
  }
  public postMethod() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1'
      )
      .subscribe((data) => {
        this.postJsonValue.push(data);
      });
  }
}
