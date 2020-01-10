import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  changeMessage(messagex: string) {
    this.messageSource.next(messagex)
  }
  
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  getPosts() {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts/')
  }
  getPortUser() {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/pages/44')
  }
  firstClick() {
    return console.log('clicked');
  }

}
