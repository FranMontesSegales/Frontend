import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  url = 'http://localhost:3000/boss';
  constructor(private http: HttpClient) {}

  //get Boss
  public getBoss(datos: any) {
    return this.http.get(
      `${this.url}?name=${datos.name}&description=${datos.description}`
    );
  }

  //get Personajes
  public getCharacter(datos: any) {
    return this.http.get(
      `${this.url}?name=${datos.name}&description=${datos.description}`
    );
  }

  //get Personajes
  public getItem(datos: any) {
    return this.http.get(
      `${this.url}?name=${datos.name}&description=${datos.description}`
    );
  }

  //get Personajes
  public getZone(datos: any) {
    return this.http.get(
      `${this.url}?name=${datos.name}&description=${datos.description}`
    );
  }
}

export interface Boss {
  id_boss?: string;
  name?: string;
  description?: string;
  deathblow?: String;
  usefulTools?: String;
  localization?: String;
  item?: String;
}
export interface Character {
  id_character?: string;
  name?: string;
  description?: string;
  localization?: String;
  item?: String;
}

export interface Item {
  id_item?: string;
  name?: string;
  description?: string;
  localization?: String;
  type?: String;
}

export interface Zone {
  id_zone?: string;
  name?: string;
  description?: string;
}
