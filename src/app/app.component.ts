import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elkportal';
  // tslint:disable-next-line:variable-name
  private _opened = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
