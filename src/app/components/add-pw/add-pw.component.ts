import { Component } from '@angular/core';
import {PwService} from "../../services/pw.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pw} from "../../models/pw";
import {Tooth} from "../../models/tooth";


@Component({
  selector: 'app-add-pw',
  templateUrl: './add-pw.component.html',
  styleUrls: ['./add-pw.component.css']
})
export class AddPwComponent {

  pw: Pw = new Pw();

  constructor(private _pwService: PwService, private _router: Router,private _activateRoute :ActivatedRoute) {}
  ngOnInit(): void {

    this.getTooths();

    const isIdPresent = this._activateRoute.snapshot.paramMap.has('id');

    if (isIdPresent) {
      const idParam = this._activateRoute.snapshot.paramMap.get('id');

      // Vérifier si idParam n'est pas null avant de convertir en nombre
      if (idParam !== null) {
        const id: number = parseInt(idParam, 10);
        this._pwService.getPw(id).subscribe(
          data => this.pw = data
        );
      } else {
        // Gérer le cas où idParam est null
        console.error("ID is null");
      }
    }
  }

  savePw() {
    let toothId;

    if (this.pw.id_tooth && this.pw.id_tooth !== null && this.pw.id_tooth!== undefined) {
      toothId = this.pw.id_tooth;
      this.pw.setTooth(toothId);

    } else {
      // Utilisation de 0 comme valeur par défaut, changez-le en fonction de vos besoins
      toothId = 1;


    }
    this._pwService.savePw(this.pw).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/pws");
      },
      error => {
        console.error('Error saving pw', error);
        // Ajoutez une logique pour gérer l'erreur ici
      }
    );

  }



  deletePw(id : number){
    this._pwService.deletePw(id).subscribe(
      data=>{
        console.log("deleted Response",data);
        this._router.navigateByUrl('/pws');
      }
    )
  }

  tooths: Tooth[] =[];

  getTooths() {
    this._pwService.getTooths().subscribe(
      data => {
        this.tooths = data;
        console.log('Tooths:', this.tooths); // Ajout du console.log pour le débogage
      },
      error => {
        console.error('Error fetching tooths', error);
        // Ajoutez une logique pour gérer l'erreur ici
      }
    );
  }

}
