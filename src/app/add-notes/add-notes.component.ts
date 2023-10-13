import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyNotes } from 'src/model/myNotes';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent {
  notes:MyNotes = {}

  constructor (private api: ApiService, private router:Router){}
    saveNotes (){
      this.api.addNotes(this.notes).subscribe((result:any) => {
        this.router.navigateByUrl('Main');
      })
    }
}
