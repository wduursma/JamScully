import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-naw',
  templateUrl: './naw.component.html',
  styleUrls: ['./naw.component.scss']
})
export class NawComponent implements OnInit {

  users: any;
  status: boolean = true;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.getusert();
  }

  getusert() {
    this.data.getPortUser().subscribe(data => {
      this.users = data;
      console.log(this.users)
      }
    );
  }
  clickEvent(){
      this.status = !this.status;       
  }
}