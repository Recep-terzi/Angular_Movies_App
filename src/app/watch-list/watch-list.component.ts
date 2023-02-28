import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  public watchListJson: any;
  public detailId: any;

  IMG_API = 'https://image.tmdb.org/t/p/w1280';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    let data: any = localStorage.getItem('watchList');
    this.watchListJson = JSON.parse(data);
    console.log(this.watchListJson);
  }
}
