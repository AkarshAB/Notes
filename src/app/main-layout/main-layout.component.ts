import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyNotes } from 'src/model/myNotes';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  allNotes: any = [];
  searchKey:string = '';
  //api dependancy injection
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getAllNotess()
  }
    getAllNotess(){
      this.api.getAllNotes().subscribe((data: MyNotes) => {
        console.log(data);
        this.allNotes = data
      })
    }
  

  deleteNote(notesId: any) {
    this.api.deleteNote(notesId).subscribe((result: any) => {
      alert('Note deleted successfully');
      this.getAllNotess()
    })
   
  }
  search(event:any){
    console.log(event);
    console.log(event.target.value);
    this.searchKey = event.target.value;
    
  }

}
