import { Component, OnInit } from '@angular/core';
import { FoodService as ProductService } from '../services/food/food.service';
import {Product} from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Product[] = []
  constructor(private productService:ProductService, private route:ActivatedRoute){ }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.foods = this.productService.getAllFoodsBySearchTerm(params.searchTerm)
        else if (params.tag)
        this.foods = this.productService.getAllFoodsByTag(params.tag)
        else
        this.foods = this.productService.getAll();
    })
  }
}
