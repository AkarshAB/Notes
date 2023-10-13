import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyNotes } from 'src/model/myNotes';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit{

  notesId:string = ''
  notes:MyNotes = {}
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) => {
      console.log(data);
      console.log(data.id);
      this.notesId = data.id;

      //call api for getting particular id details
      this.api.viewNotes(this.notesId).subscribe((result:any) => {
        console.log(result);
        this.notes = result;
      })
    })
  }
  updateNotes(){
    this.api.updateNote(this.notesId,this.notes).subscribe((result:any) => {
      console.log(result);
      this.router.navigateByUrl('/')
      
    })
  }
}
