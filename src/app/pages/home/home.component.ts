import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExploremenuComponent } from './exploremenu/exploremenu.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ExploremenuComponent, RouterOutlet, MenuitemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bgPhoto = '../../../assets/header_img.png';
  orderPhoto = "../../../assets/trolley.png";
  searchPhoto ="../../../assets/search.png";
  signInPhoto = "../../../assets/user.png";
}
