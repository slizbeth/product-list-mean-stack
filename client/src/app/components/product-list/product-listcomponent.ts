import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = []
  
  constructor(private productService: ProductService,
              private toastr: ToastrService) {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: data => this.productList = data,
      error: error => console.log(error)
    })
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe({
      next: e => {
        this.toastr.error('The product was successfully removed', 'Deleted product')
        this.getProducts()
      },
      error: error => console.log(error)
    })
  }
}
