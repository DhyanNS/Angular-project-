import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 2 },
      { name: 'Chicken', count: 4 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Vegs',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/Images/foods/food-1.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 2,
        name: 'Chicken Pizza',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/Images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/Images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Pizza',
        price: 22,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/Images/foods/food-4.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 5,
        name: 'Chicken Meals',
        price: 75,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/Images/foods/food-5.jpg',
        tags: ['SlowFood', 'Chicken'],
      },
      {
        id: 6,
        name: 'south meals',
        price:100,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/foods/food-6.jpg',
        tags: [ 'Lunch'],
      },
      {
        id: 7,
        name: 'chicken briyani',
        price: 90,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/foods/food-7.jpg',
        tags: [ 'Chicken', 'Lunch'],
      },
      {
        id: 8,
        name: 'pawns Fry',
        price: 90,
        cookTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/foods/food-10.jpg',
        tags: [ 'Chicken', 'Fry'],
      },
      {
        id: 9,
        name: 'French fry',
        price: 50,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/foods/food-11.jpg',
        tags: [ 'Chicken', 'Fry'],
      },
    ];
  }
}