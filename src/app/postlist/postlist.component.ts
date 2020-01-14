import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitterService } from '../event-emitte.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  
  messagex: string ;
  posts: any;

  constructor(
    private data: DataService,
    private eventEmitterService: EventEmitterService 
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex)
    this.getFirstPosts();
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((value:string) => {    
        this.getPosts(value); 
      });    
    }  
  }

  newContent(value) {
    this.data.changeMessage(value);
  }

  getPosts(value) {
    this.data.getPosts(value).subscribe(data => {
      this.posts = data;  
      }
    );
  }
  getFirstPosts() {
    this.data.getFirstPosts().subscribe(data => {
      this.posts = data;  
      }
    );
  }
  selectContent(cat){
    this.eventEmitterService.onSelectContentClick(cat);   
  }
   


}
