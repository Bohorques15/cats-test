import { Component, OnInit, Input } from '@angular/core';
import { CatInfo } from '../../models';
import { ActivatedRoute, Router } from "@angular/router";
import { CatService } from '../../services/cat.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.css']
})
export class CatInfoComponent implements OnInit {

  catInfo: CatInfo;
  private sub: any;
  id: string;
  stars: number[] = [1,2,3,4,5];

  constructor(private route: ActivatedRoute, private router: Router, private catService: CatService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => { 
      this.id = params['id']; 
      this.load_cat();
    });
  }

  async load_cat() {
    let parameters = `breed_ids=${this.id}`;
    this.catService.getCatImages(parameters).pipe(first()).subscribe(catinfo => { 
      this.catInfo = catinfo[0];
    });
  }

  filterGreaterThan(value){
    return this.stars.filter(item => item > value);
  }

  filterLowerThanOrEqual(value){
    return this.stars.filter(item => item <= value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log( "ngOnDestroy() called." );
  }

}
