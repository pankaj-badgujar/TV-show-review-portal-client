import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  findStudentByStudentId = (studentId) =>
    fetch(`http://localhost:8080/findStudent/${studentId}`)
      .then(res => res.json())
}
