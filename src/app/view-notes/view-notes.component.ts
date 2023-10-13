import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit{

  notesId:string = '' //to hold the id of the contact
  notesDetails:any = {}

  constructor (private activatedRoute: ActivatedRoute, private api:ApiService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) =>{
      console.log(data.id);
      this.notesId = data.id

      this.api.viewNotes(this.notesId).subscribe((result:any) => {
        console.log(result);
        this.notesDetails = result
      })
      
    })
  }
}
