import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitterService } from '../event-emitte.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  messagex: string;
 
  @Input() categories: any; 

  constructor(
    private data: DataService,
    private eventEmitterService: EventEmitterService 
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex);
    
  }
  newMessagex(value) {
    this.data.changeMessage(value);
  }
  
  selectCategories(value){    
    this.eventEmitterService.onFirstComponentButtonClick(value);   
  } 


}
