import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../static';

import { Cat, CatInfo, Category } from '../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  items: Cat[];

  constructor(
    private http: HttpClient) { 
  }

	getAll(parameters: string): Observable<Cat[]>  {
    let endpoint = `${API.URL}/breeds`;
    if(!this.isEmpty(parameters)){
      endpoint = `${endpoint}?${parameters}`;
    }
    return this.http.get<Cat[]>(endpoint);
  }

	getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API.URL}/categories`);
  }

  isEmpty(str) {
    return (!str || str.length === 0 );
  }

  /*getBy(parameters: string){
    return this.http.get<Cat[]>(`${API.URL}/breeds/search?${parameters}`);
  }*/

  getCatImages(parameters: string): Observable<CatInfo[]> {
    return this.http.get<CatInfo[]>(`${API.URL}/images/search?${parameters}`);
  }

  //Filtrar busqueda
  filterItems(searchTerm): Cat[]{
    //console.log(searchTerm);
    if(searchTerm == ''){
      //console.log('vacio');
      return this.items;
    }
    //console.log('filro');
    return this.items.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
      item.origin.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
