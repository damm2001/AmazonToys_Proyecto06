import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosJuguetesService {

  
  private URL: string = 'https://toys-966a7-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { }

  

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
}
  
}
