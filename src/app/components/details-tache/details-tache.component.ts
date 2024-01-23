import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tache } from '../../models/Tache';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import { Statut } from '../../models/Statut';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TacheService } from '../../services/tache.service';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-tache',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgStyle,MatInputModule, MatSelectModule,MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './details-tache.component.html',
  styleUrl: './details-tache.component.css'
})
export class DetailsTacheComponent implements OnInit {


  @Input()
  tache !: Tache;

  @Input()
  index !: number;

  libelle !:string;
  description !: string;
  error :string |null=null;

  editable: boolean = false;
  @Output()
  refreshList : EventEmitter<any> = new EventEmitter();

  valeursStatut = Object.values(Statut);

  constructor( private service:TacheService){
  }

  ngOnInit(): void {
    this.libelle = this.tache.libelle;
    this.description = this.tache.description;
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
    console.log(this.tache);
    this.service.changeStatut(event,this.tache);

  }
  /**
   * permet de supprimer la tâche
   */
  deleteTache() {
    this.service.deleteTask(this.tache);
    this.refreshList.emit();
    }

    setEditable(){
      this.editable=true;
    }

    setNonEditable(){
      this.editable = false;
    }

    saveTache(){
      this.service.saveTask(this.tache,this.libelle,this.description);
      this.refreshList.emit();
      this.editable=false;
    }

    checkError(){
      if(this.libelle!="" && this.description !=""){
        this.error=null;
      }
      else{
        this.error = "les champs 'libellé' et 'description' doivent contenir du texte";
      }
    }
}
