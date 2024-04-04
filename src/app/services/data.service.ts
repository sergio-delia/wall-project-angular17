import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async createUser(name: string, color: string) {
    const docRef = await addDoc(collection(this.firestore, 'users'), {
      name: name,
      color: color
    });
    console.log("Document written with ID: ", docRef.id);
  }


}
