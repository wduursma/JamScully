import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  users: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        //sconsole.log(this.users);
      }
    );
  }
  firstClick() {
    this.data.firstClick();
  }

}
