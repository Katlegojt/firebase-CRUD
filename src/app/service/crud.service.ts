import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Event{
    start:Date;
    title: string;
    meta:{
      venue:string,
      description:string,
      image:string,
    };
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }
}
