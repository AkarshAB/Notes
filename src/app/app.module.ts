import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule} from '@angular/common/http';
import { ViewNotesComponent } from './view-notes/view-notes.component'
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ViewNotesComponent,
    AddNotesComponent,
    EditNotesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
