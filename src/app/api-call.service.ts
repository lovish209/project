import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
   arr:any[]=[];
  constructor(private http:HttpClient) { }


   CallApi(): Observable<any[]>{
     for(let i=0;i<=9; i++){
      //  console.log(i);
      this.arr[i]=this.http.get<any>('http://recruitment.roadcast.net/node_js_api').pipe(
       tap((data) =>{
         console.log("Data is here");
       })
     )
     
      }

      return forkJoin(this.arr);
  }
}
