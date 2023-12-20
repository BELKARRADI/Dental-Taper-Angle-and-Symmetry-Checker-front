
import { Component } from '@angular/core';
import {GroupeService} from "../../services/groupe.service";
import {Router} from "@angular/router";
import {Groupe} from "../../models/Groupe";

@Component({
  selector: 'app-list-groupes',
  templateUrl: './list-groupes.component.html',
  styleUrls: ['./list-groupes.component.css']
})
export class ListGroupesComponent {

  groupes: Groupe[] =[];

  filters={
    keyword:''
  }
  constructor(private _groupeService:GroupeService) {
  }
  ngOnInit():void{
    this.listGroupe();
  }

  deleteGroupe(id: number | undefined) {
    if (id !== undefined) {
      this._groupeService.deleteGroupe(id).subscribe(
        () => {
          console.log("Groupe deleted successfully");
          this.listGroupe();
        },
        error => {
          console.error("Error deleting groupe", error);
        }
      );
    } else {
      console.error("ID is undefined");
    }
  }

  filterGroupe(groupes: Groupe[]) {
    return groupes.filter(e =>
      e.code?.toLowerCase().includes(this.filters.keyword.toLowerCase()));
  }

  listGroupe() {
    this._groupeService.getGroupes().subscribe(
      data => {
        this.groupes = this.filterGroupe(data);
      },
      error => {
        console.error("Error getting groupes", error);
      }
    );
  }

}
