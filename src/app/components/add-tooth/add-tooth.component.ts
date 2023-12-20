import { Component } from '@angular/core';
import {Tooth} from "../../models/tooth";
import {ToothService} from "../../services/tooth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Professor} from "../../models/professor";

@Component({
  selector: 'app-add-tooth',
  templateUrl: './add-tooth.component.html',
  styleUrls: ['./add-tooth.component.css']
})
export class AddToothComponent {

  tooth: Tooth = new Tooth();

  constructor(private _toothService: ToothService, private _router: Router,private _activateRoute :ActivatedRoute) {}
  ngOnInit(): void {


    const isIdPresent = this._activateRoute.snapshot.paramMap.has('id');

    if (isIdPresent) {
      const idParam = this._activateRoute.snapshot.paramMap.get('id');

      // Vérifier si idParam n'est pas null avant de convertir en nombre
      if (idParam !== null) {
        const id: number = parseInt(idParam, 10);
        this._toothService.getTooth(id).subscribe(
          data => this.tooth = data
        );
      } else {
        // Gérer le cas où idParam est null
        console.error("ID is null");
      }
    }
  }

  saveTooth() {

    this._toothService.saveTooth(this.tooth).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/tooths");
      },
      error => {
        console.error('Error saving tooth', error);
        // Ajoutez une logique pour gérer l'erreur ici
      }
    );

  }



  deleteTooth(id : number){
    this._toothService.deleteTooth(id).subscribe(
      data=>{
        console.log("deleted Response",data);
        this._router.navigateByUrl('/tooths');
      }
    )
  }






}
