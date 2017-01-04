import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Ng2DragDropModule} from 'ng2-drag-drop';

@NgModule({
  imports:      [ BrowserModule , Ng2DragDropModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
