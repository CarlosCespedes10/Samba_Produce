import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MACHINE_BASE_URL, MACHINE_READ_ALL } from 'src/app/commons/endpoint/machine/Machine';
import { GenericResponseDTO } from 'src/app/commons/response/GenericResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class ReadListMachineryService {

  constructor(private http: HttpClient) { }

  readListMachinery(index: number): Observable<GenericResponseDTO>{
    console.log("id de la consulta" + (index + 1));
    return this.http.get<GenericResponseDTO>(MACHINE_BASE_URL + MACHINE_READ_ALL);
  }
}