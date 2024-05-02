import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, UpperCasePipe],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  productForm: FormGroup
  title: string
  id: string | null

  constructor(private fb: FormBuilder,
              private router: Router,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService,
              private productService: ProductService) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.title = 'Create product'
    this.id = this.aRouter.snapshot.paramMap.get('id')
    this.isModify()
  }

  addProduct() {
    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value
    }

    if (this.id != null) {
      this.productService.modifyProduct(this.id, PRODUCT).subscribe({
        next: data => {
          this.toastr.info('The product was successfully modified', 'Modified product')
          this.router.navigate(['/'])
        },
        error: error => {
          this.productForm.reset();
        }
      })
    } else {
      this.productService.createProduct(PRODUCT).subscribe({
        next: data => {
          this.toastr.success('The product was successfully registered', 'Registered product')
          this.router.navigate(['/'])
        },
        error: error => {
          this.productForm.reset();
        }
      })
    }
  }

  isModify() {
    if (this.id !== null) {
      this.title = 'Modify product'
      this.productService.getProduct(this.id).subscribe({
        next: data => {
          this.productForm.setValue({
            product: data.name,
            category: data.category,
            location: data.location,
            price: data.price,
          })
        }
      })
    }
  }
}
