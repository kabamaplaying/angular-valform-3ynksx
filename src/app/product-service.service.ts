import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Product } from './Producto';
@Injectable({ providedIn: "root" })
export class ProductServiceService {

  productList: BehaviorSubject<Product[]>;
  listaP: Product[] = [];
 
  constructor() { 
     this.listaP = [
      {
        name: "Zapatos",
        description: "Zapatos Nike",
        year: 1990,
        price: 200000
      },
      {
        name: "Zapatos",
        description: "Zapatos Reebok",
        year: 1998,
        price: 100000
      },
      {
        name: "Zapatos",
        description: "Zapatos Azumi",
        year: 1970,
        price: 500000
      }
    ];

    this.productList = new BehaviorSubject(this.listaP);
  }


  listaProductos() :Observable<Product[]>{

   
    
    return  this.productList.asObservable().pipe(
      map(e => e as Product[]
      )
      );
  }

  agregarProducto(producto: Product) {
    console.log(producto)
     this.productList.next([...this.productList.value, producto]);
  }

}