import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { productd } from '../productd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getData():Observable<productd[]>{

    let url="http://localhost:3000/products"
    return this.http.get<productd[]>(url);


  }}

