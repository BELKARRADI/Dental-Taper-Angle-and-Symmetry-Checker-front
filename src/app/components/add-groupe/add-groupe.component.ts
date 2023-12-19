import { Component } from '@angular/core';
import {Groupe} from "../../models/Groupe";
import {GroupeService} from "../../services/groupe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Professor} from "../../models/professor";

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupeComponent {

  groupe: Groupe = new Groupe();

  constructor(private _groupeService: GroupeService, private _router: Router,private _activateRoute :ActivatedRoute) {}
  ngOnInit(): void {

    this.getProfessors();

    const isIdPresent = this._activateRoute.snapshot.paramMap.has('id');

    if (isIdPresent) {
      const idParam = this._activateRoute.snapshot.paramMap.get('id');

      // Vérifier si idParam n'est pas null avant de convertir en nombre
      if (idParam !== null) {
        const id: number = parseInt(idParam, 10);
        this._groupeService.getGroupe(id).subscribe(
          data => this.groupe = data
        );
      } else {
        // Gérer le cas où idParam est null
        console.error("ID is null");
      }
    }
  }

  saveGroupe() {
    let professorId;

    if (this.groupe.id_professor && this.groupe.id_professor !== null && this.groupe.id_professor!== undefined) {
      professorId = this.groupe.id_professor;
      this.groupe.setProfessor(professorId);

    } else {
      // Utilisation de 0 comme valeur par défaut, changez-le en fonction de vos besoins
      professorId = 1;


    }
    this._groupeService.saveGroupe(this.groupe).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/groupes");
      },
      error => {
        console.error('Error saving groupe', error);
        // Ajoutez une logique pour gérer l'erreur ici
      }
    );

  }



  deleteGroupe(id : number){
    this._groupeService.deleteGroupe(id).subscribe(
      data=>{
        console.log("deleted Response",data);
        this._router.navigateByUrl('/groupes');
      }
    )
  }

  professors: Professor[] =[];

  getProfessors() {
    this._groupeService.getProfessors().subscribe(
      data => {
        this.professors = data;
        console.log('Professors:', this.professors); // Ajout du console.log pour le débogage
      },
      error => {
        console.error('Error fetching professors', error);
        // Ajoutez une logique pour gérer l'erreur ici
      }
    );
  }

}
