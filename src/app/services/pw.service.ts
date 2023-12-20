import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pw } from "../models/pw";
import { map } from "rxjs/operators";
import {Tooth} from "../models/tooth";

@Injectable({
  providedIn: 'root'
})
export class PwService {
  private getUrl: string = "http://localhost:8082/api/PW";

  constructor(private _httpClient: HttpClient) { }

  getPws(): Observable<Pw[]> {
    return this._httpClient.get<Pw[]>(this.getUrl).pipe(
      map(response => response)
    );
  }
  savePw(pw: Pw): Observable<Pw> {
    // If the group has an id, it's an update (PUT request)
    if (pw.id) {
      return this._httpClient.put<Pw>(`${this.getUrl}/${pw.id}`, pw);
    } else {
      // If the group doesn't have an id, it's an insertion (POST request)
      return this._httpClient.post<Pw>(`${this.getUrl}`, pw);
    }
  }
  getPw(id: number): Observable<Pw> {
    return this._httpClient.get<Pw>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
    );
  }
  deletePw(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.getUrl}/${id}`);
  }


  private getToothsUrl: string = "http://localhost:8082/api/Tooth";

  getTooths(): Observable<Tooth[]> {
    return this._httpClient.get<Tooth[]>(this.getToothsUrl).pipe(
      map(response => response)
    );
  }

  getTooth(id: number): Observable<Tooth> {
    return this._httpClient.get<Tooth>(`${this.getToothsUrl}/${id}`).pipe(
      map(response=>response)
    );
  }
}
