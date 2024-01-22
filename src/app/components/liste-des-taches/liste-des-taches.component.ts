import { Component, OnInit } from '@angular/core';
import { Tache } from '../../models/Tache';
import { DetailsTacheComponent } from '../details-tache/details-tache.component';
import { TacheService } from '../../services/tache.service';
import { FormulaireTacheComponent } from '../formulaire-tache/formulaire-tache.component';

@Component({
  selector: 'app-liste-des-taches',
  standalone: true,
  imports: [DetailsTacheComponent,FormulaireTacheComponent],
  templateUrl: './liste-des-taches.component.html',
  styleUrl: './liste-des-taches.component.css'
})
export class ListeDesTachesComponent implements OnInit{
  taches !: Tache[];
  constructor(private service:TacheService){

  }
  ngOnInit(): void {
    this.taches=this.service.getTasks();
  }


}
