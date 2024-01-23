import { Injectable } from '@angular/core';
import { Tache } from '../models/Tache';
import { Statut } from '../models/Statut';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private tasks: Tache[] = [];

  constructor() {
    this.tasks.push({
      description: "tache de test",
      libelle: "test",
      statut: Statut.enCours
    })
  }

  /**
   * récupére le tableau des tâches
   * @returns le tableau des tâches
   */
  getTasks(): Tache[] {
    return this.tasks;
  }

  /**
   * permet d'ajouter une tâche dans notre liste
   * @param tache tâche à ajouter
   */

  addTask(tache: Tache) {
    this.tasks.push(tache);
  }

  /**
   * change le statut d'une tache de la liste
   * @param statut nouveau statut
   * @param index  position de l'item à changer
   */
  changeStatut(statut: Statut, index: number) {
    this.tasks[index].statut = statut;
  }

  /**
   * supprime un élément de la liste
   * @param index position de l'élément à supprimer
   */
  deleteTask(element: Tache) {
    let index= this.getIndex(element);
    this.tasks.splice(index, 1);
  }

  /**
   * permet de récupérer l'index d'un élément
   * @param element element à trouver
   * @returns index de l'élément
   */
  getIndex(element :Tache) :number{
    return this.tasks.indexOf(element);
  }

  /**
   * filtre les taches selon leur statut
   * @param statut la valeur du statut à trouver
   * @returns liste filtrée
   */
  getByStatut(statut: string): Tache[] {
    let taskFilter: Tache[] = [];
    this.tasks.forEach((task) => {
      if (task.statut == statut) {
        taskFilter.push(task);
      }
    })
    return taskFilter;
  }

}
