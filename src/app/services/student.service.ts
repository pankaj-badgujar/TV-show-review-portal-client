import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  server = 'http://localhost:8080/';

  constructor() { }

  findStudentByStudentId = (studentId) =>
    fetch(this.server + `findStudent/${studentId}`)
      .then(res => res.json())
}
