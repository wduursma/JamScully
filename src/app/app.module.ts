import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitterService } from './event-emitte.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoComponent } from './who/who.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CategoriesComponent } from './categories/categories.component';
import { NawComponent } from './naw/naw.component';
import { PostlistComponent } from './postlist/postlist.component';
import { ContentComponent } from './content/content.component';
import { SliderAboutMeComponent } from './slider-about-me/slider-about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WhoComponent,
    HomeComponent,
    PortfolioComponent,
    CategoriesComponent,
    NawComponent,
    PostlistComponent,
    ContentComponent,
    SliderAboutMeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
