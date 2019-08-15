import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollUnderFacultyService {

  // server = 'http://localhost:8080/';
  server = 'https://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor() {
  }

  findFacultyEnrolledIn = (userId) =>
    fetch(this.server + `findFacultyOfStudent/${userId}`)
      .then((res) => {
        return res.text()
      })
      .then(text => text.length ? JSON.parse(text) : null);

  findAllFaculties = () =>
    fetch(this.server + `/faculties`)
      .then((res) => {
        return res.text()
      })
      .then((text) => text.length ? JSON.parse(text) : null);


  enrollUnderFaculty = (userId, faculty) =>
    fetch(this.server + `enroll/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(faculty),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());

  cancelEnrollment(userId) {
    return fetch(this.server + `cancelEnrollment/${userId}`, {
      method: 'DELETE',
    }).then(res => res.json());

  }

  findFacultyByUserId = (userId) =>
    fetch(this.server + `findFacultyByUserId/${userId}`)
      .then(res => res.json());
}
