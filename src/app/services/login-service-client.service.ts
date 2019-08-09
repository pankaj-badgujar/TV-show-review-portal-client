import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceClientService {

  loggedInUser : any;

  constructor() {
  }

  login = (credentials) =>
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
      .then((text) => text.length ? this.loggedInUser = JSON.parse(text) : null)


}
