import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I AM THE TITLE';
  public image = "/assets/images/Angular1.jpg" //Property Binding
  public random = "" //Two-way Binding
  onClick(){  //Event Binding

    console.log("I am Event Binding")

  }
}
