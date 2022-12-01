import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    // return this.http.get<any>("https://fakestoreapi.com/product")
    return this.http.get<any>("https://web-production-82c6.up.railway.app/client/products/all")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}