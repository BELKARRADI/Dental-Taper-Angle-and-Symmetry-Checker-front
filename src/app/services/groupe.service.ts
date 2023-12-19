import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Groupe } from "../models/Groupe";
import { map } from "rxjs/operators";
import {Professor} from "../models/professor";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private getUrl: string = "http://localhost:8082/api/Groupe";

  constructor(private _httpClient: HttpClient) { }

  getGroupes(): Observable<Groupe[]> {
    return this._httpClient.get<Groupe[]>(this.getUrl).pipe(
      map(response => response)
    );
  }
  saveGroupe(groupe: Groupe): Observable<Groupe> {
    // If the group has an id, it's an update (PUT request)
    if (groupe.id) {
      return this._httpClient.put<Groupe>(`${this.getUrl}/${groupe.id}`, groupe);
    } else {
      // If the group doesn't have an id, it's an insertion (POST request)
      return this._httpClient.post<Groupe>(`${this.getUrl}`, groupe);
    }
  }
  getGroupe(id: number): Observable<Groupe> {
    return this._httpClient.get<Groupe>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
    );
  }
  deleteGroupe(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.getUrl}/${id}`);
  }


  private getProfessorsUrl: string = "http://localhost:8082/api/Professor";

  getProfessors(): Observable<Professor[]> {
    return this._httpClient.get<Professor[]>(this.getProfessorsUrl).pipe(
      map(response => response)
    );
  }

  getProfessor(id: number): Observable<Professor> {
    return this._httpClient.get<Professor>(`${this.getProfessorsUrl}/${id}`).pipe(
      map(response=>response)
    );
  }
}
