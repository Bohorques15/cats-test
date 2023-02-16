import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats:  Cat[];
  limit: number = 15;
  search:string = '';

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.load_cats();
  }

  private load_cats() {
    let parameters = `limit=${this.limit}`;
    this.catService.getAll(parameters).pipe(first()).subscribe(cats => { 
      this.cats = cats;
      this.catService.items = cats;
      if(!this.isEmpty(this.search)){
        this.searchBy(this.search);
      }
    });
  }

  reloadCats(limit){
    this.load_cats();
  }

  searchBy(value){
    this.cats = this.catService.filterItems(value);
  }

  isEmpty(str) {
    return (!str || str.length === 0 );
  }

}

