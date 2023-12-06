import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarmetoShopService {
  private endpoint = 'https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093'

  constructor(private http: HttpClient) { }

  getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.endpoint).pipe(
      map((response: any) => response.data));
  }

  searchProducts(inputData: string):Observable<any[]>{
    return this.getProducts().pipe(
      map(products =>{
        if(!inputData){
          return products;
        }
        inputData = inputData.toLowerCase();
        return products.filter(product => product.product_title.toLowerCase().includes(inputData));
      })
    )
  }
}
