import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from  './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent  },
  { path: 'who', component: WhoComponent },
  { path: 'portfolio', component: PortfolioComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
