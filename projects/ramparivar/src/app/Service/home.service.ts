import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError,of } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { HomeModel } from '../model/home-model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _apiUrl="/assets/mock-data/home.json";
  constructor( private http:HttpClient) { }

  getHomeData():Observable<HomeModel[]>{

    return this.http.get<HomeModel[]>(this._apiUrl).pipe(
      tap(data=>console.log('All :'+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

    private handleError(err:HttpErrorResponse):Observable<never>{
      
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
        errorMessage=`an error occured :`
      }
      else{
        errorMessage=`Server returned code: ${err.status}, error meage i:${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }




}
