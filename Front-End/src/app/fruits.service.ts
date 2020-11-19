// src/app/fruits.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  constructor(private http: HttpClient) {}
  inCart = false;
  getAll(){
    return this.http.get(`${environment.productUrl}/products`);
  }
}
