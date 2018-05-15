import { Injectable } from '@angular/core';

@Injectable()
export class MedicoService {
  private medicos:any[] = [{nome:'Teste'}];

  constructor() {
    if(localStorage.getItem('medicos') != 'undefined' && localStorage.getItem('medicos') != null && localStorage.getItem('medicos') != '')
      this.medicos = JSON.parse(localStorage.getItem('medicos'));
  }

  getMedicos():any[]{return  this.medicos};
  getMedico(idx: number):any{
    return this.medicos[idx];
  }

  addMedico(medico:any){
      if(typeof medico == 'object')
        this.medicos.push(medico);
      localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }

  editarMedico(idx:number, obj:any){
    this.medicos[idx] = obj;
    localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }
  removeMedico(idx:number){
    this.medicos.splice(idx,1);
    localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }

}

