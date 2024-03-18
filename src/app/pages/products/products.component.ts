import { Component, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList:IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router)

  ngOnInit(): void {
    // realiza el get de la api
    this._apiService.getAllProducts().subscribe((data:IProduct[]) => {
      this.productsList = data
    })
  }

  navegate(id:number){
    this._router.navigate(["/products", id]);
  }
}
