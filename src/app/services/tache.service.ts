import { Injectable } from '@angular/core';
import { Tache } from '../models/Tache';
import { Statut } from '../models/Statut';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private tasks : Tache[] =[];

  constructor() {
    this.tasks.push({
    description : "tache de test",
    libelle :"test",
    statut : Statut.enCours
    })
   }

   /**
    * récupére le tableau des tâches
    * @returns le tableau des tâches
    */
   getTasks() : Tache[]{
    return this.tasks;
   }

   /**
    * permet d'ajouter une tâche dans notre liste
    * @param tache tâche à ajouter
    */

   addTask(tache:Tache){
    this.tasks.push(tache);
   }

   changeStatut (statut:Statut,index:number){
    this.tasks[index].statut=statut;
   }

   deleteTask(index:number){
    this.tasks.splice(index,1);
   }

}
