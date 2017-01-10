import { Component, Renderer, ViewChild, ElementRef, Input } from '@angular/core';
import { Modal } from "ng2-modal";

@Component({
  selector: 'le',
  template: `

        <modal #myModal1
          modalClass="modal-lg"
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
    .modal-le{
      width: 99%;
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
