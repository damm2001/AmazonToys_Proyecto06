import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosJuguetesService {

  constructor(private http:HttpClient) { }

  private URL: string = 'https://toys-966a7-default-rtdb.firebaseio.com/collection.json';

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
}
  
}
