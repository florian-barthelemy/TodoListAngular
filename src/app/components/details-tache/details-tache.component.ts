import { Component, Input } from '@angular/core';
import { Tache } from '../../models/Tache';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import { Statut } from '../../models/Statut';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TacheService } from '../../services/tache.service';

@Component({
  selector: 'app-details-tache',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgStyle,MatInputModule, MatSelectModule],
  templateUrl: './details-tache.component.html',
  styleUrl: './details-tache.component.css'
})
export class DetailsTacheComponent {


  @Input()
  tache !: Tache;

  @Input()
  index !: number;

  valeursStatut = Object.values(Statut);

  constructor( private service:TacheService){

  }

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

  /**
   * permet de changer le statut de la tache
   */
  changeStatut(event:any){
    this.service.changeStatut(event,this.index);

  }

  deleteTache() {
    this.service.deleteTask(this.index);
    }
}
