import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSiderBar: boolean = false;

  onShowHideSiderBarChange(showSiderBar){
   this.showSiderBar = showSiderBar;
 }

}