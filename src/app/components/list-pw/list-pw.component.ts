import { Component } from '@angular/core';
import {PwService} from "../../services/pw.service";
import {Router} from "@angular/router";
import {Pw} from "../../models/pw";

@Component({
  selector: 'app-list-pw',
  templateUrl: './list-pw.component.html',
  styleUrls: ['./list-pw.component.css']
})
export class ListPwComponent {

  pws: Pw[] =[];

  filters={
    keyword:''
  }
  constructor(private _pwService:PwService) {
  }
  ngOnInit():void{
    this.listPw();
  }

  deletePw(id: number | undefined) {
    if (id !== undefined) {
      this._pwService.deletePw(id).subscribe(
        () => {
          console.log("Pw deleted successfully");
          this.listPw();
        },
        error => {
          console.error("Error deleting pw", error);
        }
      );
    } else {
      console.error("ID is undefined");
    }
  }

  filterPw(pws: Pw[]) {
    return pws.filter(e =>
      e.title?.toLowerCase().includes(this.filters.keyword.toLowerCase()));
  }

  listPw() {
    this._pwService.getPws().subscribe(
      data => {
        this.pws = this.filterPw(data);
      },
      error => {
        console.error("Error getting pws", error);
      }
    );
  }

}
