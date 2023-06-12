import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  //get Boss
  public getBoss(name: string, description: string) {
      return this.http.get<Boss[]>(`${this.url}/boss?name=${name}&description=${description}`);

  }

  //get Personajes
  public getCharacter(name: string, description: string) {
    return this.http.get<Character[]>(`${this.url}/character?name=${name}&description=${description}`);

  }

  //get Personajes
  public getItem(name: string, description: string) {
      return this.http.get<Item[]>(`${this.url}/item?name=${name}&description=${description}`);
  }

  //get Personajes
  public getZone(name: string, description: string) {
    return this.http.get<Zone[]>(`${this.url}/zone?name=${name}&description=${description}`);
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
