import { NgModule }      from '@angular/core';

import {ModalModule} from "ng2-modal";

import {LeComponent} from './le.component'
import {ChildComponent} from './child/child.component'

@NgModule({
  imports:      [ModalModule ],
  declarations: [ LeComponent, ChildComponent ],
  bootstrap:    [ LeComponent ],
  exports:      [LeComponent]
})
export class LeModule { }
