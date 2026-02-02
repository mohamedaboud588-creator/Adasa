import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-section',
  imports: [],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySection {
  categories: Category[] = [
    { name: 'إضاءة', count: 3, color: 'emerald' },
    { name: 'بورتريه', count: 3, color: 'purple' },
    { name: 'مناظر طبيعية', count: 2, color: 'blue' },
    { name: 'تقنيات', count: 5, color: 'orange' },
    { name: 'معدات', count: 3, color: 'emerald' },
  ];
}
