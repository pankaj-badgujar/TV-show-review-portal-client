import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  findUserById = (userId) =>
    fetch(`http://localhost:8080/api/users/${userId}`)
      .then(res => res.json());

  updateUser = (userId,user) =>
    fetch(`http://localhost:8080/api/users/${userId}`,{
      method : 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type' : 'application/json'
      }
    })
      .then(res => res.json())
}
