import { Component, OnInit, Input } from '@angular/core';
import { ActiveService } from '../../core/services/active.service';
import { Active } from '../../core/interfaces/active';
import { SimplePaginationComponent } from '../../core/simple-pagination/simple-pagination.component';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {

  @Input('actives') actives: Active;
  public currentPage: number;
  public nextPage: number;
  public previousPage: number;
  public lastPage: number;

  constructor() { }

  ngOnInit() {
  }

  setPage(page) {
    this.actives = <Active>page.data;
    console.log(page);
  }

}
