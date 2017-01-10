import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Ng2DragDropModule} from 'ng2-drag-drop';

import { LeModule } from './components/le/le.module'

@NgModule({
  imports:      [ BrowserModule , Ng2DragDropModule, LeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
