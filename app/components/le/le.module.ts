import { NgModule }      from '@angular/core';

import {ModalModule} from "ng2-modal";

import {LeComponent} from './le.component'

@NgModule({
  imports:      [ModalModule ],
  declarations: [ LeComponent ],
  bootstrap:    [ LeComponent ],
  exports:      [LeComponent]
})
export class LeModule { }
