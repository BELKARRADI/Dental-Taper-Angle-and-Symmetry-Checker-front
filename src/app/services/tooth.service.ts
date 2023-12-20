import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tooth } from "../models/tooth";
import { map } from "rxjs/operators";
import {Professor} from "../models/professor";

@Injectable({
  providedIn: 'root'
})
export class ToothService {
  private getUrl: string = "http://localhost:8082/api/Tooth";

  constructor(private _httpClient: HttpClient) { }

  getTooths(): Observable<Tooth[]> {
    return this._httpClient.get<Tooth[]>(this.getUrl).pipe(
      map(response => response)
    );
  }
  saveTooth(tooth: Tooth): Observable<Tooth> {
    // If the group has an id, it's an update (PUT request)
    if (tooth.id) {
      return this._httpClient.put<Tooth>(`${this.getUrl}/${tooth.id}`, tooth);
    } else {
      // If the group doesn't have an id, it's an insertion (POST request)
      return this._httpClient.post<Tooth>(`${this.getUrl}`, tooth);
    }
  }
  getTooth(id: number): Observable<Tooth> {
    return this._httpClient.get<Tooth>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
    );
  }
  deleteTooth(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.getUrl}/${id}`);
  }

}
