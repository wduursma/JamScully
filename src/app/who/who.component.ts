import { Component, OnInit, Input } from '@angular/core';
import {IdleMonitorService, ScullyRoutesService} from '@scullyio/ng-lib'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {

  users: any;
  status: boolean = true;
  messagex: string;

  @Input() message: any; 
 

  constructor(
    private data: DataService,
    private idle: IdleMonitorService,
    public scully: ScullyRoutesService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex)
   
  }


}
