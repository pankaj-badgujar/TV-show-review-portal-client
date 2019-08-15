import {Injectable} from '@angular/core';
import {LoginServiceClientService} from "./login-service-client.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  // server = 'http://localhost:8080/';
  server = 'http://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor(private loginService: LoginServiceClientService) {
  }

  register = (user) =>
    fetch(this.server + `/register`,
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }

      }
    )
      .then((res) => {

        return res.status != 200? "error" : res.text()

      })
      .then((text) => {
        return text == "error" ? null : this.loginService.addFetchedUserToSessionStorage(text)
      });

  registerStudent = (student) =>
    fetch(this.server +`registerStudent`,{
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'content-type' : 'application/json'

      }

    }).then();

  registerFaculty = (faculty) =>
    fetch(this.server + `registerFaculty`,{
      method: 'POST',
      body: JSON.stringify(faculty),
      headers: {
        'content-type' : 'application/json'
      }

    }).then();
}
