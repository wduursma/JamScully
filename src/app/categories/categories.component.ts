import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  messagex: string;
  
 
  @Input() categories: any; 

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex)
  }
  newMessagex(value) {
    this.data.changeMessage(value);
  }


}
