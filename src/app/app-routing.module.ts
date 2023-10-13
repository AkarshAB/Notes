import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Main', pathMatch: 'full'
  },
  {
    path: 'Main', component: MainLayoutComponent
  },
  {
    path: 'Main/View/:id', component: ViewNotesComponent
  },
  {
    path: 'Main/Add', component: AddNotesComponent
  },
  {
    path: 'Main/Edit/:id', component: EditNotesComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
