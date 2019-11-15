import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private _httpClient: HttpClient) { }

  /*Author :Sonal Naik
  * This service will be used to create observable of csv data 
  * 
  * 
  */
  fetchCsvDetails(){
    return this._httpClient.get('./assets/^GSPC.csv', {responseType: 'text'});
   
  }
}
