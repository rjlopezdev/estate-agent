import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SimplePaginationService } from '../services/simple-pagination.service';

@Component({
  selector: 'app-simple-pagination',
  templateUrl: './simple-pagination.component.html',
  styleUrls: ['./simple-pagination.component.css'],
})
export class SimplePaginationComponent implements OnInit {

  @Input('resource') resource: string;
  @Output('page') page: EventEmitter<any> = new EventEmitter<any>();

  public previousPage: number;
  public currentPage: number;
  public nextPage: number;
  public lastPage: number;

  constructor(private paginationService: SimplePaginationService) { }

  ngOnInit() {
    this.setPages();
    this.paginationService.setResource(this.resource);
    this.paginationService.initPagination()
      .subscribe(page => {
        this.lastPage = page.last_page;
        this.page.emit(page);
      });
  }

  next() {
    this.setPages();
    this.paginationService.getNextPage()
      .subscribe(page => {
        this.currentPage = page.current_page;
        this.nextPage = page.current_page + 1;
        this.previousPage = (page.current_page != 1)
          ? page.current_page - 1
          : null;
        this.page.emit(page);
      });
  }

  previous() {
    this.setPages();
    this.paginationService.getPreviousPage()
      .subscribe(page => {
        this.currentPage = page.current_page;
        this.nextPage = page.current_page + 1;
        this.previousPage = (page.current_page != 1)
          ? page.current_page - 1
          : null;
        this.page.emit(page);
      });
  }

  setPages() {
    this.previousPage = this.paginationService.previousPage;
    this.currentPage = this.paginationService.currentPage;
    this.nextPage = this.paginationService.nextPage;
  }

}
