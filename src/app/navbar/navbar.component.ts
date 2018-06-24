import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSiderBar: boolean = true;

  @Output()
  showSiderBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  showHideSiderBar(){
    this.showSiderBar = !this.showSiderBar;
    this.showSiderBarChange.emit(this.showSiderBar);
  }

}