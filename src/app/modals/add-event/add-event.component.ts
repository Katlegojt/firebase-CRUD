import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CancerEvent, CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  event = {} as CancerEvent;
  addEvent: FormGroup;
  constructor(public modalRef: MDBModalRef,private formBuilder: FormBuilder,private _crud:CrudService) { 

   


  }

  ngOnInit(): void {

    this.addEvent = this.formBuilder.group({
      title: ['', Validators.required],
      description:['',Validators.required],
      venue:['',Validators.required],
      image:['',Validators.required],
      start:['',Validators.required],
      end:['',Validators.required]
     
    });
  }
  createEvent(){
    
    let event: CancerEvent ={
    title : this.addEvent.value.title,
    meta : {
    description :this.addEvent.value.description,
    image : "https://firebasestorage.googleapis.com/v0/b/my-cancer-guide-2020.appspot.com/o/cancer%2Fimages1607435637259?alt=media&token=bc0a300d-e159-449a-a2c4-39f42a3c190a",
    venue : this.addEvent.value.venue,},
    start : this.addEvent.value.start,
    end : this.addEvent.value.end,
    id : "kat"
    }
    this._crud.createInfo(event);
  }

}
