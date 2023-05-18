import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  public counter = 21;

  public handleOnClick(stateCounter: any){
    this.counter++;
    
  }
}
