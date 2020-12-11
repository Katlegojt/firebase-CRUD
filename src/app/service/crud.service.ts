import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { title } from 'process';
import { map } from 'rxjs/operators';

export interface CancerEvent{
    id:string;
    start:number;
    end: number;
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
 
  constructor(private firestore: AngularFirestore) { 
    

  }


  getInfo(){

   return this.firestore.collection("Cancer").doc("gOORI0SeF2GryaxfazOv")
   .collection("types").doc("CuJRO63j2XRPZQyIJ0Qj")
    .collection("events").snapshotChanges().pipe(map(data => data.map(a =>
      { const info = a.payload.doc.data();
        const id = a.payload.doc.id;
         return{...info}})));

  }


  createInfo(event: CancerEvent){

    return this.firestore.collection("Cancer").doc("gOORI0SeF2GryaxfazOv")
    .collection("types").doc("CuJRO63j2XRPZQyIJ0Qj")
     .collection("events").add(event);


  }
}
