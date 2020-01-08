import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {

  users: any;
  status: boolean = true;

  @Input() message: string; 
  @Input() title: string; 

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
   
  }

}
