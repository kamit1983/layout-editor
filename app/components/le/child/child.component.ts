import { Component, Renderer, ViewChild, ElementRef, Input } from '@angular/core';
import { Modal } from "ng2-modal";

@Component({
  selector: 'child',
  template: `

        <modal #myModal2
          modalClass="modal-child"
        >
            <modal-header>
                <h3>Modal header</h3>
            </modal-header>
            <modal-content>
                Hello Modal!
            </modal-content>
            <modal-footer>
                <button class="btn btn-primary" (click)="myModal2.close()">close</button>
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
export class ChildComponent  {
  name = 'Angular';
  @Input() id: String;
  @ViewChild('myModal2') myModal2:Modal;
  ngOnChanges(){
    if(this.id !== ''){
      this.myModal2.open();
    }
    console.log(this.id);
  }

}
