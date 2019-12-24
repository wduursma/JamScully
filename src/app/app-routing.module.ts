import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
	{ path: 'who', component: WhoComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
