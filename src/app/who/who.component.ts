import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {

  users: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.getusert();
  }

  getusert() {
    this.data.getPortUser().subscribe(data => {
      this.users = data;
      console.log(this.users.title);
      console.log(this.users.title.rendered);
      }
    );
  }
  


}
