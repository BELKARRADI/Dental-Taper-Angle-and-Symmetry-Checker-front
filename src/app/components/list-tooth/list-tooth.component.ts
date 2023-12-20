import { Component } from '@angular/core';
import {ToothService} from "../../services/tooth.service";
import {Router} from "@angular/router";
import {Tooth} from "../../models/tooth";

@Component({
  selector: 'app-list-tooths',
  templateUrl: './list-tooth.component.html',
  styleUrls: ['./list-tooth.component.css']
})
export class ListToothComponent {

  tooths: Tooth[] =[];

  filters={
    keyword:''
  }
  constructor(private _toothService:ToothService) {
  }
  ngOnInit():void{
    this.listTooth();
  }

  deleteTooth(id: number | undefined) {
    if (id !== undefined) {
      this._toothService.deleteTooth(id).subscribe(
        () => {
          console.log("Tooth deleted successfully");
          this.listTooth();
        },
        error => {
          console.error("Error deleting tooth", error);
        }
      );
    } else {
      console.error("ID is undefined");
    }
  }

  filterTooth(tooths: Tooth[]) {
    return tooths.filter(e =>
      e.name?.toLowerCase().includes(this.filters.keyword.toLowerCase()));
  }

  listTooth() {
    this._toothService.getTooths().subscribe(
      data => {
        this.tooths = this.filterTooth(data);
      },
      error => {
        console.error("Error getting tooths", error);
      }
    );
  }

}
