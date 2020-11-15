// src/app/fruits.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
export interface UpdateStt{
  'name': string;
  'status': Status;
}
export enum Status {
  Created = 1,
  Confirmed = 2,
  Cancelled = 3,
  Delivered = 4
}

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  constructor(private http: HttpClient) {}

  getAll(){
return this.http.get('http://localhost:3000/order');
  }

  // tslint:disable-next-line:typedef
  setStt(updateStt: UpdateStt) {
    const url = 'http://localhost:3000/order/update';
    const headers = {'Content-Type': 'application/json'};
    const body = { name: updateStt.name, status: updateStt.status};
    return this.http.put(url, body, {headers});
  }
}
