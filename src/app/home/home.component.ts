import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  users: any;
  portFolio: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.getusert();
    this.getPort();
  }
  getusert() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users.data);
    }
  );
  }
  getPort() {
    this.data.getPort().subscribe(data => {
      this.portFolio = data;
      console.log(this.portFolio);
      }
    );
  }

  firstClick() {
    this.data.firstClick();
  }

}
