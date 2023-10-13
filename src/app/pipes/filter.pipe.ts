import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  

  transform(allNotes:any[], searchTerm:string, propName:string):any[] {
    const result:any[] = [];
    if(!allNotes || searchTerm == '' || propName == ''){
      return allNotes;
    }
    allNotes.forEach((note:any) => {
      // if(note[propName] == searchTerm)
      if(note[propName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
      
      result.push(note)
      }
    })
    return result;
    }
    
  }


