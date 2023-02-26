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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
