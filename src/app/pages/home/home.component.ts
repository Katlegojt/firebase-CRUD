import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
//import {CalendarEvent,} from 'angular-calendar';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { AddEventComponent } from 'src/app/modals/add-event/add-event.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title:any;
  venue:any;
  image: any;
  dataList:any=[];
  id: any;
  start: any;
  modalRef: MDBModalRef ;
  //events: CalendarEvent<{venue:string, description:string, image:string}>[] = this.dataList;
  
  constructor(private _crud:CrudService, private modalService: MDBModalService) { 
    
   
   
  
  }

  
  ngOnInit(): void {
    this._crud.getInfo().subscribe( data =>{
      this.dataList = data;
      
    });

  }
  
  
  openModal() {
    this.modalRef = this.modalService.show(AddEventComponent)
  }

}


