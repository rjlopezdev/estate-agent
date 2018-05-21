import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Active } from '../interfaces/active';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor(private http: HttpClient) {

  }

  public getActives() : Observable<Active> {
    return this.http.get<Active>('active');
  }

}
