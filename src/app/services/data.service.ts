import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async createUser(name: string, color: string) {
    const docRef = await addDoc(collection(this.firestore, 'users'), {
      name: name,
      color: color,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  }

  async deleteUser(id: any){
    try {
      await deleteDoc(doc(collection(this.firestore, 'users'), id))
      console.log('Document with ID', id, 'deleted successfully');
    } catch (error) {
      console.log('Error deleting document:', error);
    }
  }


}
