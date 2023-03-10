import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/enviroments.api';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  public getJsonValue: any;
  IMG_API = environment.IMG_API;
  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {
    this.getJsonValue = [];
  }
  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.dataService.getMethod().subscribe((data: any) => {
      this.getJsonValue = data.results;
    });
  }

  onSelect(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
