import { Component, OnInit } from '@angular/core';
import { BossService, Boss, Character, Item, Zone } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  description: string = '';
  deathblow: string = '';
  usefulTools: string = '';
  localization: string = '';
  item: string = '';

  bossData: Boss[] = [];
  characterData: Character[] = [];
  itemData: Item[] = [];
  zoneData: Zone[] = [];

  constructor(private bossService: BossService) {}

  ngOnInit() {
    this.getBossData();
    this.getCharacterData();
    this.getItemData();
    this.getZoneData();

  }


  getBossData() {

    this.bossService.getBoss('BossName', 'BossDescription').subscribe(
      (response) => {
        console.log('Solicitud GET exitosa', response);
        this.bossData = response as Boss[]; // Forzar el tipo a Boss[]
      },
      (error) => {
        console.error('Error al realizar la solicitud GET', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }

  getCharacterData() {

    this.bossService.getCharacter('CharacterName', 'CharacterDescription').subscribe(
      (response) => {
        console.log('Solicitud GET exitosa', response);
        this.characterData = response as Character[]; // Forzar el tipo a Character[]
      },
      (error) => {
        console.error('Error al realizar la solicitud GET', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }

  getItemData() {
    this.bossService.getItem('ItemName', 'ItemDescription').subscribe(
      (response) => {
        console.log('Solicitud GET exitosa', response);
        this.itemData = response as Item[]; // Forzar el tipo a Character[]
      },
      (error) => {
        console.error('Error al realizar la solicitud GET', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }

  getZoneData() {
    this.bossService.getZone('ZoneName', 'ZoneDescription').subscribe(
      (response) => {
        console.log('Solicitud GET exitosa', response);
        this.zoneData = response as Zone[]; // Forzar el tipo a Character[]
      },
      (error) => {
        console.error('Error al realizar la solicitud GET', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }
}
