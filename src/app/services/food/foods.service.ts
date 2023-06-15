import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFoods } from 'src/app/Foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  public _url="https://localhost:7057/api/Foods";

  constructor(private http:HttpClient) { }

  getFoods():Observable<IFoods[]>{
    return this.http.get<IFoods[]>(this._url)
  }

  addFood(hotel: IFoods): Observable<IFoods> {
    return this.http.post<IFoods>(this._url, hotel);
  }

  deleteFood(id: number): Observable<IFoods> {
    let dataurl: string = `${this._url}/${id}`;
    return this.http.delete<IFoods>(dataurl)
  }

  updateFood(id: number, movie: IFoods): Observable<IFoods> {
    console.log("Inside Update Function")
    let dataurl: string = `${this._url}/${id}`;
    return this.http.put<IFoods>(dataurl, movie);
  }
}
