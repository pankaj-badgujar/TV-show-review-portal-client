import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollUnderFacultyService {

  constructor() {
  }

  findFacultyEnrolledIn = (userId) =>
    fetch(`http://localhost:8080/findFaculty/${userId}`, {
      mode: 'no-cors'
    })
      .then(res => res.json());


  findAllFaculties = () =>
    fetch(`http://localhost:8080/faculties`)
      .then(res => res.json());

  enrollUnderFaculty = (userId, faculty) =>
    fetch(`http://localhost:8080/enroll/${userId}`, {
      method: 'POST',
      body: JSON.stringify(faculty),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());
}
