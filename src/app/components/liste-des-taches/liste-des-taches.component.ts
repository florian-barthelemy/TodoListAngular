import { Component } from '@angular/core';
import { Tache } from '../../models/Tache';
import { DetailsTacheComponent } from '../details-tache/details-tache.component';
import { Statut } from '../../models/Statut';

@Component({
  selector: 'app-liste-des-taches',
  standalone: true,
  imports: [DetailsTacheComponent],
  templateUrl: './liste-des-taches.component.html',
  styleUrl: './liste-des-taches.component.css'
})
export class ListeDesTachesComponent {

  taches : Tache[] = [{
    description : "tache de test",
    libelle :"test",
    statut : Statut.enCours
  }];

}
