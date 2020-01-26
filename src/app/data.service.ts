import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  messageId: string;

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  changeMessage(messagex: string) {
    this.messageSource.next(messagex)
    this.messageId = messagex;
 
  }
  
 
  getFirstPosts() {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts');
  }
  getPosts(value) {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts?categories='+value);
  }
  getFirstContent() {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts/');
  }
  getContent(value) {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts/'+value);
  }
  getPortUser() {
     return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/pages/44');
  }
  firstClick() {
    return console.log('clicked');
  }

}
