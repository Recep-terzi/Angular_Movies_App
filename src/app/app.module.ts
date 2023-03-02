import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    SliderComponent,
    CategoriesComponent,
    TopBarComponent,
    SearchPageComponent,
    WatchListComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: 'apiUrl',
      useValue:
        'https://api.themoviedb.org/3/movie/popular?api_key=466279f06d7f82ea9024d440431f8663&language=en-US&page=1',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
