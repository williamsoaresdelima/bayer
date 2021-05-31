import { environment } from './../environments/environment.dev';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bayer Teste';

  constructor(){
    console.log(environment.production);
    //console.log(environment.dev;
  }
}
