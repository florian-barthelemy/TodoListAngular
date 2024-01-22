import { Component, Input } from '@angular/core';
import { Tache } from '../../models/Tache';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-details-tache',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgStyle],
  templateUrl: './details-tache.component.html',
  styleUrl: './details-tache.component.css'
})
export class DetailsTacheComponent {

  @Input()
  tache !: Tache;

  /**
   * change la couleur du fond de la carte selon le statut de la tache
   * @returns Object objet contenant la propriété background-color 
   */
  setBackgroundColor(): Object {
    let color = "";
    switch (this.tache.statut) {
      case "en cours":
        color += "orange";
        break;

      case "terminée":
        color += "green";
        break;

      case "à venir" :
        color += "yellow";
        break;

      default :
      color += "white";
      break;
    }
    return {'background-color':color};

  }
}
