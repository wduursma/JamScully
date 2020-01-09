import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-naw',
  templateUrl: './naw.component.html',
  styleUrls: ['./naw.component.scss']
})
export class NawComponent implements OnInit {

  //users: any;
  status: boolean = true;

  @Input() acf: any; 

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
  }
  
  clickEvent(){
      this.status = !this.status;       
  }
}