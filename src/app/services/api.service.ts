import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyNotes } from 'src/model/myNotes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //dependancy injection
  constructor(private http:HttpClient) { }

  //get function for getting all notes details
  getAllNotes():Observable<MyNotes>{  //displays error without return

      return this.http.get('http://localhost:3000/notes');
  }

  //to view notes
  viewNotes (notesId:string){
    return this.http.get(`http://localhost:3000/notes/${notesId}`)
  }

  addNotes (notesBody:any){
    return this.http.post(`http://localhost:3000/notes`,notesBody)
  }

  //api call for deleting a particular note
  deleteNote(notesId:any){
    return this.http.delete(`http://localhost:3000/notes/${notesId}`)
  }

  //api call to update notes
  updateNote(noteId:any,noteBody:any){
    return this.http.put(`http://localhost:3000/notes/${noteId}`,noteBody)
  }
}
