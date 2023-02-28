import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  public getJsonValue: any;
  public postJsonValue: Array<any> = [];
  search: string = '';
  IMG_API = 'https://image.tmdb.org/t/p/w1280';

  constructor(private http: HttpClient, private router: Router) {
    this.getJsonValue = [];
  }
  ngOnInit(): void {
    this.getSearchData();
  }
  sendit(inputValue: string) {
    this.search = inputValue;
    this.getSearchData();
  }
  public getSearchData() {
    this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&query=${this.search}&page=1&include_adult=false`
      )
      .subscribe((data: any) => {
        this.getJsonValue = data.results;
      });
  }
  onSelect(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
