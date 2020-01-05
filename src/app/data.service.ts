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
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/posts/')
  }
  getPortUser() {
    return this.http.get('https://i-nix.nl/jamstack/wp-json/wp/v2/pages/44')
  }
  firstClick() {
    return console.log('clicked');
  }

}
