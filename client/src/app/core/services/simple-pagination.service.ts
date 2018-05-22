import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimplePaginationService {

  // Resource to consume
  public resource: string;
  // Pagination Pages
  public currentPage: number;
  public previousPage: number;
  public nextPage: number;
  public navigateToPage: number;
  public lastPage: number;

  constructor(private http: HttpClient) {
    this.navigateToPage = 1;
    this.previousPage = null;
    this.currentPage = 1;
    this.nextPage = 2;
  }

  setResource(resource: string) {
    this.resource = resource;
  }

  initPagination(): Observable<any> {
    return this.http.get<any>(this.resource + '?page=' + this.navigateToPage);
  }

  setPages(action: string) {
    if(action === 'NEXT') {
      this.navigateToPage = this.nextPage;
      this.previousPage = this.previousPage + 1;
      this.currentPage = this.currentPage + 1;
      this.nextPage = this.nextPage + 1;
    } else if(action === 'PREVIOUS') {
      this.navigateToPage = this.previousPage;
      this.previousPage = this.previousPage - 1;
      this.currentPage = this.currentPage - 1;
      this.nextPage = this.nextPage - 1;
    } else {
      console.log('Invalid parameter.')
    }
  }

  getNextPage(): Observable<any> {
    console.log('hi')
    this.setPages('NEXT');
    return this.http.get<any>(this.resource + '?page=' + this.navigateToPage);
  }

  getPreviousPage(): Observable<any> {
    this.setPages('PREVIOUS');
    return this.http.get<any>(this.resource + '?page=' + this.navigateToPage);
  }

}
