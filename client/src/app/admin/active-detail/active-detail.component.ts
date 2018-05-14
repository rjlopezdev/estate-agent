import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-detail',
  templateUrl: './active-detail.component.html',
  styleUrls: ['./active-detail.component.css']
})
export class ActiveDetailComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
