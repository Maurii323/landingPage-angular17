import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: IProduct;
  loading?:boolean = true;

  ngOnInit():void{
    this._route.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data:IProduct) => {
        console.log(data);
        this.product = data;
        this.loading = false;
      });
    })
  }
}
