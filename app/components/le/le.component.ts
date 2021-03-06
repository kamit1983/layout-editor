import { Component, Renderer, ViewChild, ElementRef, Input } from '@angular/core';
import { Modal } from "ng2-modal";
import {ChildComponent} from './child/child.component'

@Component({
  selector: 'le',
  template: `

        <modal #myModal1
          modalClass="large-Modal"
        >
            <modal-header>
                <h3>Modal header</h3>
            </modal-header>
            <modal-content>
                Hello Modal!
                <button class="btn btn-primary" (click)="onClick()">open my modal</button>
                  <child [id]=id1></child>
            </modal-content>
            <modal-footer>
                <button class="btn btn-primary" (click)="myModal1.close()">close</button>
            </modal-footer>
        </modal>
  `,
  styles: [`
    :host /deep/ .large-Modal {
       width: 99%;
       margin-top: 10px;
     }
   `
    ]
})
export class LeComponent  {
  name = 'Angular';
  id1 = '';
  @Input() id: String;
  @ViewChild('myModal1') myModal1:Modal;
  ngOnChanges(){
    if(this.id !== ''){
      this.myModal1.open();
      this.id1 = '';
    }
    console.log(this.id);
  }

  onClick(){
    this.id1 = this.id1 + '2';
  }

}
