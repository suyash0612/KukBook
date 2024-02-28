import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipebook';
  defaultPage : string = 'recipe';
  onPageChange(page){
    this.defaultPage = page;
  }
}
