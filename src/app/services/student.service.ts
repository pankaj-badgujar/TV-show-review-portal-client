import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // server = 'http://localhost:8080/';
  server = 'http://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor() {
  }

  findStudentByStudentId = (studentId) =>
    fetch(this.server + `findStudent/${studentId}`)
      .then(res => res.json());

  findStudentByUserId = (userId) =>
    fetch(this.server + `findStudentByUserId/${userId}`)
      .then(res => res.text())
      .then(text => text.length ? JSON.parse(text) : null);
}
