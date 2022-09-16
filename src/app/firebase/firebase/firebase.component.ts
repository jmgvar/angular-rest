import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('personas').valueChanges();
  }

  ngOnInit(): void {
  }

}
