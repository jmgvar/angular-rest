import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {
  users: User[] = [];
  constructor(private http: HttpClient) {
    this.http.get<any>('https://reqres.in/api/users?per_page=12').subscribe(data => {
      this.users = data.data;
    })
  }

  ngOnInit(): void {
  }

}
