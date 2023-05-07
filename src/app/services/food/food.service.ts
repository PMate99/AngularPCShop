import { Injectable } from '@angular/core';
import { Product as Product } from 'src/app/shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Product{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Product[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())); 
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'AMD', count: 2 },
      { name: 'Intel', count: 2 },
      { name: 'NVIDIA', count: 1 },
      { name: 'GPU', count: 3 },
      { name: 'CPU', count: 2 },
      { name: 'PSU', count: 1 },
      { name: 'Peripheral', count: 2 },
    ];
  }

  getAllFoodsByTag(tag: string): Product[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Product[]{
    return [
      {
        id: 1,
        name: 'PC Case',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/pccase.jpg',
        tags: ['Case'],
      },
      {
        id: 2,
        name: 'AMD Processor',
        price: 20,
        favorite: true,
        origins: ['Hungary', 'USA', 'Canada'],
        imageUrl: '/assets/images/foods/processzor.jpg',
        tags: ['AMD', 'CPU'],
      },
      {
        id: 3,
        name: 'Power-supply',
        price: 5,
        favorite: false,
        origins: ['Germany', 'Spain'],
        imageUrl: '/assets/images/foods/tap.jpg',
        tags: ['PSU'],
      },
      {
        id: 4,
        name: 'NVIDIA RTX GPU',
        price: 9999,
        favorite: false ,
        origins: ['USA', 'India'],
        imageUrl: '/assets/images/foods/videokartya.jpg',
        tags: ['NVIDIA', 'GPU'],
      },
    
      {
        id: 5,
        name: 'AMD GPU',
        price: 5000,
        favorite: true,
        origins: ['China', 'Canada'],
        imageUrl: '/assets/images/foods/amggpu.jpg',
        tags: ['AMD', 'GPU'],
      },
    
      {
        id: 6,
        name: 'Intel Processor',
        price: 10,
        favorite: false,
        origins: ['Hungary', 'france'],
        imageUrl: '/assets/images/foods/intel.jpg',
        tags: ['Intel', 'CPU'],
      },
    
      {
        id: 7,
        name: 'Acer Monitor',
        price: 43,
        favorite: true,
        origins: ['Japan', 'France'],
        imageUrl: '/assets/images/foods/monitor.jpg',
        tags: ['Peripheral', 'Acer'],
      },
    
      {
        id: 8,
        name: 'Headset',
        price: 22,
        favorite: false,
        origins: ['USA', 'France'],
        imageUrl: '/assets/images/foods/headset.jpg',
        tags: ['Peripheral', 'Headset'],
      },
    
      {
        id: 9,
        name: 'Intel ARC',
        price: 50,
        favorite: false,
        origins: ['Canada', 'China'],
        imageUrl: '/assets/images/foods/intelgpu.jpg',
        tags: ['Intel', 'GPU'],
      }
    

    ]
  }
}
