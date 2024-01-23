import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TacheService } from '../../services/tache.service';
import {MatInputModule} from '@angular/material/input';
import { Statut } from '../../models/Statut';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-formulaire-tache',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatInputModule,MatSelectModule,MatButtonModule],
  templateUrl: './formulaire-tache.component.html',
  styleUrl: './formulaire-tache.component.css'
})

export class FormulaireTacheComponent {
  newTache!:FormGroup;
  valeursStatut = Object.values(Statut);

  @Output()
  refreshList : EventEmitter<any> = new EventEmitter();

  constructor(private service:TacheService) {
    this.newTache = new FormGroup({
      //définir chaque contrôle d'attributs
      libelle : new FormControl("",Validators.required),
      description : new FormControl("",[Validators.required]),
      statut :  new FormControl(this.valeursStatut[0])
    });
  }

  addTache(){
    this.service.addTask(this.newTache.value);
    this.newTache.reset();
    this.refreshList.emit();
  }
}
