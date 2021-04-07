import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  API_URL = environment.API_URL;


  constructor(private http: HttpClient) {

  }

  getactors() {
    return this.http.get(this.API_URL + '/actors');
  }

}
