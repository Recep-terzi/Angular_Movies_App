import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/enviroments.api';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: DataService) {}
  ngOnInit(): void {}

  selectPage = 'Home';

  selectPageClick(value: string) {
    this.selectPage = value;
  }
  public loading = true;
  loadingTime = setTimeout(() => {
    this.loading = false;
  }, 1000);
}
