import { Component, OnInit } from '@angular/core';
import { Tache } from '../../models/Tache';
import { DetailsTacheComponent } from '../details-tache/details-tache.component';
import { TacheService } from '../../services/tache.service';
import { FormulaireTacheComponent } from '../formulaire-tache/formulaire-tache.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-liste-des-taches',
  standalone: true,
  imports: [DetailsTacheComponent, FormulaireTacheComponent, MatButtonModule],
  templateUrl: './liste-des-taches.component.html',
  styleUrl: './liste-des-taches.component.css'
})
export class ListeDesTachesComponent implements OnInit {

  taches !: Tache[];
  filter: string = "Toutes";
  constructor(private service: TacheService) {

  }
  ngOnInit(): void {
    this.taches = this.service.getTasks();
  }

  /**
   * permet de changer la valeur du filtre pour changer l'affichage des boutons
   * @param filter le filtre à appliquer sur le statut
   */
  refreshFilter(filter: string) {
    if (filter != this.filter) {
      this.filter = filter;
      this.refreshListe();
    }
  }

  /**
   * permet de refresh la liste des taches affichées par le statut
   */
  refreshListe(){
    switch(this.filter){
      case "À venir" :
        this.taches=this.service.getByStatut("à venir");
        break;

      case "Toutes" :
        this.taches=this.service.getTasks();
        break;
        
      case "En cours"  :
        this.taches=this.service.getByStatut("en cours");
        break;

      case "Terminées" :
        this.taches=this.service.getByStatut("terminée");
    }
  }


}
