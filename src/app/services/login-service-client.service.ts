import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceClientService {

  loggedInUser: any;

  constructor() {
  }

  authenticate = (credentials) =>
    fetch(`http://localhost:8080/login`,
      {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((res) => {
        return res.text()
      })
      .then((text) => text.length ? this.addFetchedUserToSessionStorage(text) : null);

  addFetchedUserToSessionStorage(text: string) {
    sessionStorage.setItem('loggedInUser', text);
    return JSON.parse(text);
  }

  getLoggedInUser(){
    return JSON.parse(sessionStorage.getItem('loggedInUser'));
  }

  logoutUser(){
    sessionStorage.removeItem('loggedInUser');
  }
}
