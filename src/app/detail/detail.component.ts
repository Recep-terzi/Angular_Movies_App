import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public detailId: any;
  public getDetailJson: any;
  IMG_API = 'https://image.tmdb.org/t/p/w1280';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.getMethod();
  }
  public getMethod() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.detailId}?api_key=466279f06d7f82ea9024d440431f8663&language=tr-TR`
      )
      .subscribe((data: any) => {
        this.getDetailJson = data;
        console.log(this.getDetailJson);
      });
  }
}
