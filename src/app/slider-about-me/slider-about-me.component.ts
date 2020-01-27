import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slider-about-me',
  templateUrl: './slider-about-me.component.html',
  styleUrls: ['./slider-about-me.component.scss']
})
export class SliderAboutMeComponent implements OnInit {
  images: any;
  resensie: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.getResensie();
  }

  getResensie() {
    this.data.getResensie().subscribe(data => {
      this.resensie = data;  
      }
    );
  }
}
