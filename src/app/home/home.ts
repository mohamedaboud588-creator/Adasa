import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Featured } from "../featured/featured";
import { CategorySection } from "../category-section/category-section";

@Component({
  selector: 'app-home',
  imports: [Hero, Featured, CategorySection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
