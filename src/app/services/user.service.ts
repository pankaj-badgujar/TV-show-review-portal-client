import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // server = 'http://localhost:8080/';
  server = 'http://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor() { }

  findUserById = (userId) =>
    fetch(this.server + `api/users/${userId}`)
      .then(res => res.json());

  updateUser = (userId,user) =>
    fetch(this.server + `api/users/${userId}`,{
      method : 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type' : 'application/json'
      }
    })
      .then(res => res.json())
}
