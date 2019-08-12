import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollUnderFacultyService {

  constructor() {
  }

  findFacultyEnrolledIn = (userId) =>
    fetch(`http://localhost:8080/findFacultyOfStudent/${userId}`)
      .then((res) => {
        return res.text()
      })
      .then(text => text.length ? JSON.parse(text) : null);
  // .then(res => res.json());

  findAllFaculties = () =>
    fetch(`http://localhost:8080/faculties`)
      .then((res) => {
        return res.text()
      })
      .then((text) => text.length ? JSON.parse(text) : null);


  enrollUnderFaculty = (userId, faculty) =>
    fetch(`http://localhost:8080/enroll/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(faculty),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());

  cancelEnrollment = (userId) =>
    fetch(`http://localhost:8080/cancelEnrollment/${userId}`, {
      method: 'DELETE'
    }).then(res => res.json());

  findFacultyByUserId = (userId) =>
    fetch(`http://localhost:8080/findFacultyByUserId/${userId}`)
      .then(res => res.json());
}
