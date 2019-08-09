import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceClientService {

  constructor() {
  }

  validateCredentials = (credentials) =>
    fetch(`http://localhost:8080/api/users`,
      {
        method: 'PUT',
        body: JSON.stringify(credentials),
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((res) => res.text())
      .then((text) => text.length ? JSON.parse(text) : null)
}
