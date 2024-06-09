import { CommonModule } from '@angular/common';
import { MenuitemsService } from '../../../menuitems.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menuitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent {

  items: any[] = [];

  constructor(private menuItemService: MenuitemsService) {}

  // onCategorySelected(categoryId: number) {
  //   this.menuItemService.getItemsByCategory(categoryId).subscribe(items => {
  //     this.items = items;
  //   });
  // }
}
