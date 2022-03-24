import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private service: EmployeService) { }

  ngOnInit() {
    this.service.getsAllEmployes();
    this.service.employe = {
      idEmploye: 0,
      nom: "",
      prenom: "",
      direction: "",
      secteur: "",
      poste: "",

    }
  }

  submit() {
    this.service.addemploye().subscribe(res => {

    },
      err => {
        console.log(err)
      })
  }





}
