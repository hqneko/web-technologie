import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL: string = "http://localhost:4000/api/products"

  constructor(private http: HttpClient) { }

  getProduct(): Observable<{data: Product[], message: string, status: string}> {
    return this.http.get<{data: Product[], message: string, status: string}>(this.productURL)
  };

  deleteProduct(productId: string): Observable<{message: string, status: string}> {
    return this.http.delete<{message: string, status: string}>(this.productURL + "/" + productId);
  };

  createProduct(productId: string, productName: string, productPrice: string, productImageURL: string): Observable<{message: string, data: Product}>{
    const newProduct = {
      "id": productId,
      "name": productName,
      "price": productPrice,
      "imageURL": productImageURL
    }
    return this.http.post<{message: string, data: Product}>(this.productURL, newProduct);
  }

  getProductById(productId: string | undefined): Observable<{ message: string; data: Product }> {
    return this.http.get<{message: string, data: Product}>(this.productURL + "/" + productId);
  }

  updateProduct(product_id: string, productId: string, productName: string, productPrice: string, productImageURL: string): Observable<{message: string, data: Product}>{
    const updateProduct = {
      "id": productId,
      "name": productName,
      "price": productPrice,
      "imageURL": productImageURL
    }
    return this.http.patch<{message: string, data: Product}>(this.productURL + "/" + product_id, updateProduct);
  }

}