import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  messagex: string;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(messagex => this.messagex = messagex)
  }

}
