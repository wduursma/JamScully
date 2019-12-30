import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  getPort() {
    return this.http.get('http://i-nix.nl/wp-json/wp/v2/posts/')
  }
  firstClick() {
    return console.log('clicked');
  }

}
