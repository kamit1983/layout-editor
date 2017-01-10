import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <div class="row">
    <button class="btn btn-primary" (click)="onClick()">open my modal</button>
      <le [id]=id></le>
    </div>
  `,
  styles: [`
    .modal-le{
      width: 99%;
    }
   `
    ]
})
export class AppComponent  {
  name = 'Angular';
  id = '';
  onClick(){
    this.id = this.id + '1';
  }

}
