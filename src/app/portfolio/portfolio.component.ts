import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  users: any;
  message: any;
  title: any;

  constructor(
    private data: DataService
  ) { }



  ngOnInit() {
    this.getusert();
  }
  
  getusert() {
    this.data.getPortUser().subscribe(data => {
      this.users = data;
      this.message = this.users.content.rendered;
      this.title = this.users.title.rendered;
      }
    );
  }
 
}
