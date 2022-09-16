import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresPromiseComponent implements OnInit {

  users: User[] = [];
  constructor(private http: HttpClient) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers().then(resultado => {this.users = resultado; console.log(resultado)});

  }

  getUsers(): Promise<any> {

    const promesaUsuarios = new Promise<any>((resolve, reject) => {
      this.http.get('https://reqres.in/api/users?per_page=12').subscribe({
        next: (res: any) => {

          resolve(res.data);
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
    });
    return promesaUsuarios;
    
  }

}
