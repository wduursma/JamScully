import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitterService } from '../event-emitte.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  content: any;

  constructor(
    private data: DataService,
    private eventEmitterService: EventEmitterService 
  ) { }

  ngOnInit() {
    this.getFirstContent(); 
    if (this.eventEmitterService.subsVarContent==undefined) {    
      this.eventEmitterService.subsVarContent = this.eventEmitterService.    
      invokeSelectContentFunction.subscribe((value:string) => {    
        this.getContent(value); 
      });    
    } 
  }
  getFirstContent(){
    this.data.getFirstContent().subscribe(data => {
      this.content = data[0];  
      console.log(this.content)
      }
    );
  }

  getContent(value){
    this.data.getContent(value).subscribe(data => {
      this.content = data;  
      }
    );
  }

}
