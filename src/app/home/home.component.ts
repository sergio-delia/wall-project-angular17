import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

interface User {
  name: string,
  color: string,
  id: any
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatBadgeModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  deleteMode: boolean = false;
  nomi: string[] = ['Giorgio', "Sergio"];
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  name:string = '';
  color: string = '';

  user$: Observable<User[]>;
  //firestore: Firestore = inject(Firestore)

  constructor(private firestore: Firestore, public dataService:DataService){
    const itemCollection = collection(this.firestore, 'users');
    const orderedQuery = query(itemCollection, orderBy('createdAt', 'desc'));
    this.user$ = collectionData(orderedQuery, {idField: 'id'}) as Observable<User[]>
  }


  aggiungiNome(nome: string) {
    this.nomi.push(nome);
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    document.documentElement.style.setProperty('--mattoncino-background', randomColor);
    console.log(this.nomi);
  }

  addUser(name:string, color:string){
    this.dataService.createUser(name, color)
  }

  deleteUser(id:any){
    this.dataService.deleteUser(id)
  }



}
