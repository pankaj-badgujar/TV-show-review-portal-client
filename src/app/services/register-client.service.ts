import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  constructor() { }

  register = (user) =>
    fetch(`http://localhost:8080/register`,
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        },
        'credentials' : 'include'
      }
      )
      .then(response => response.json());

}
