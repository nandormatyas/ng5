import { Component } from '@angular/core';
import { LogService } from './shared/log.service';
import { LogTestComponent } from './log-test/log-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  //fullImagePath: string;

  constructor() {
    //this.fullImagePath = 'assets/images/'
  }
}
