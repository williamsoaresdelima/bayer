import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  shouldRun = true;
  closed=true;

  public nav;

  constructor(private router: Router,) {
  }

  ngOnInit() {
    this.nav = this.router.routerState.snapshot.url;
    console.log(this.nav);
  }


}
