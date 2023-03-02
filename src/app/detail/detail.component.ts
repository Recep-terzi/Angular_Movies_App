import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as e from 'express';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public detailId: any;
  public getDetailJson: any;
  public getReviewsJson: any;
  public getCastJson: any;
  public watchList: Array<any> = [];
  IMG_API = environment.IMG_API;
  detailSelect: string = 'About';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.getMethod();
    this.getReviews();
    this.getCast();
  }
  public getMethod() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.detailId}?api_key=466279f06d7f82ea9024d440431f8663`
      )
      .subscribe((data: any) => {
        this.getDetailJson = data;
      });
  }
  public getReviews() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.detailId}/reviews?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1`
      )
      .subscribe((data: any) => {
        this.getReviewsJson = data.results;
      });
  }
  public getCast() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.detailId}/credits?api_key=466279f06d7f82ea9024d440431f8663&language=en-US`
      )
      .subscribe((data: any) => {
        this.getCastJson = data.cast;
      });
  }
  public selectDetail(value: string) {
    this.detailSelect = value;
  }
  watchListSave() {
    localStorage.setItem('watchList', JSON.stringify(this.getDetailJson));
  }
}
