import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from './employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  url: string = "";
  'employes': Employe[];
  'employe': Employe;

  constructor(private http: HttpClient) { }
  getsAllEmployes() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.employes = res as Employe[];
      }
    )
  }
  addemploye() {
    return this.http.post(this.url, this.employe);
  }
}

