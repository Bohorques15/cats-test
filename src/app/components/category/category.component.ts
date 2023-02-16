import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CatInfo, Category } from '../../models';
import { CatService } from '../../services/cat.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private sub: any;
  category: Category;
  id: number;
  limit: number;
  catsInfo: CatInfo[];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private catService: CatService) { }

  ngOnInit(): void {
    this.sub = this.activeRoute.params.subscribe( params => { 
      this.id = params['id']; 
      this.limit = 12;
      this.load_category();
    });
  }

  async load_category() {
    let parameters = `limit=${this.limit}&category_ids=${this.id}`;
    this.catService.getCatImages(parameters).pipe(first()).subscribe(catsInfo => { 
      this.catsInfo = catsInfo;
      this.category = catsInfo[0].categories[0];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log( "ngOnDestroy() called." );
  }

}
