import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public currentYear : Date;

  constructor() { 
    this.currentYear = new Date();
  }

  ngOnInit() {
  }

}
