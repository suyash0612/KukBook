import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  @Output()
  pageEmitter : EventEmitter<string> = new EventEmitter<string>();

  selectPage(value : string){
    this.pageEmitter.emit(value);
  }
}
