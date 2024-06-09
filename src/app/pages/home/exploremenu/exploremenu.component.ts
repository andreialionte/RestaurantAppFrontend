import { Component, OnInit } from '@angular/core';
import { MenuitemsService } from '../../../menuitems.service';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exploremenu',
  templateUrl: './exploremenu.component.html',
  styleUrls: ['./exploremenu.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ExploremenuComponent implements OnInit {

  selectedCategory: number | null = null;
  items: any[] = [];

  salad: string = "../../../../assets/salad.jpg";
  rolls: string = "../../../../assets/rolls.jpg";
  deserts: string = "../../../../assets/deserts.webp";
  sandwich: string = "../../../../assets/sandwich.jpg";
  pizza: string = "../../../../assets/pizza.jpg";
  pureVeg: string = "../../../../assets/pure veg.jpg";
  pasta: string = "../../../../assets/pasta.webp";
  noodles: string = "../../../../assets/noodles.jpg";

  constructor(private menuItemsService: MenuitemsService) {}

  ngOnInit(): void {}

  selectCategory(categoryId: number): void {
    this.selectedCategory = categoryId;
    this.menuItemsService.getItemsByCategory(categoryId).subscribe(items => {
      this.items = items;
    });
  }
}
