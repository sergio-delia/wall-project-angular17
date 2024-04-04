import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';


interface User {
  name: string,
  color: string
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  nomi: string[] = ['Giorgio', "Sergio"];
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  name:string = '';
  color: string = '';

  user$: Observable<User[]>;
  //firestore: Firestore = inject(Firestore)

  constructor(private firestore: Firestore, public dataService:DataService){
    const itemCollection = collection(this.firestore, 'users');
    this.user$ = collectionData(itemCollection) as Observable<User[]>
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


}
