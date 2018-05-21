import { Component, OnInit } from '@angular/core';
import { ActiveService } from '../../core/services/active.service';
import { Active } from '../../core/interfaces/active';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {

  public actives: Active;

  constructor(private activeService: ActiveService) { }

  ngOnInit() {
    this.activeService.getActives()
      .subscribe(actives => this.actives = actives);
  }

}
