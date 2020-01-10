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
  acf: any;
  categories: any;
  messagex:string;

  constructor(
    private data: DataService
  ) { }



  ngOnInit() {
    this.getusert();
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex )

  }
  

  getusert() {
    this.data.getPortUser().subscribe(data => {
      this.users = data;
      this.message = this.users;
      this.acf = this.users.acf;
      this.categories = this.users.acf.categories;
      }
    );
  }
 
}
