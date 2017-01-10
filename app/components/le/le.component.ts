import { Component, Renderer, ViewChild, ElementRef, Input } from '@angular/core';
import { Modal } from "ng2-modal";

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
  @Input() id: String;
  @ViewChild('myModal1') myModal1:Modal;
  ngOnChanges(){
    if(this.id !== ''){
      this.myModal1.open();
    }
    console.log(this.id);
  }

}
