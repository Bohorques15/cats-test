import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { first } from 'rxjs/operators';

import { Category } from '../../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories:  Category[];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.load_categories();
  }

  async load_categories() {
    this.catService.getCategories().pipe(first()).subscribe(categories => { 
      this.categories = categories;
    });
  }

}
