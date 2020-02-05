import { Component, OnInit } from '@angular/core';

import { faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedinIn  = faLinkedinIn;
  faFacebookSquare = faFacebookSquare; 
  

  constructor() { }

  ngOnInit() {
  }

}
