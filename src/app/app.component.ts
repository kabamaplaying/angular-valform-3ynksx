import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from './product-service.service';
import { Observable } from 'rxjs';
import { Product } from './Producto';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista: Observable<Product[]>;
  productForm: FormGroup;
  constructor(private service: ProductServiceService, private fb: FormBuilder) {
    this.lista = this.service.listaProductos();
  }

  ngOnInit() {
   this.crearForma();
  }

  private crearForma() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      year: [0, [Validators.required, Validators.min(1990)]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  agregarProducto() {
    console.log(this.name.dirty, this.name.errors);
    console.log('aca vamos...', this.productForm.valid)
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get year() {
    return this.productForm.get('year');
  }

  get price() {
    return this.productForm.get('price');
  }
}
