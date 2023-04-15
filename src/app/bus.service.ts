import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  private baseURL = "http://localhost:8080/admin/bus-list";
  constructor(private httpClient: HttpClient) { }

  getBusList(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}`);
  }

  addBus(bus:Bus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,bus);
  }

  deleteBus(busId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${busId}`);
  }

  getBusById(id:number):Observable<Bus>{
    return this.httpClient.get<Bus>(`${this.baseURL}/${id}`);
  }

  updateBus(busId:number,bus:Bus):Observable<Bus>{
    return this.httpClient.put<Bus>(`${this.baseURL}/${busId}`,bus);
  }
}
