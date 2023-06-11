import { Component, OnInit } from '@angular/core';
import { BossService, Boss, Character } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `
    <img [src]="imageSrc" alt="Image">
  `,
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

  constructor(private bossService: BossService) {}

  ngOnInit() {
    this.getBossData();
    this.getCharacterData();
  }


  getBossData() {
    const datosBoss = {
      name: this.name,
      description: this.description,
    };
    this.bossService.getBoss(datosBoss).subscribe(
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
    const datosCharacter = {
      name: this.name,
      description: this.description,
    };
    this.bossService.getCharacter(datosCharacter).subscribe(
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
}
