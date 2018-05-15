import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {
  public action:string = 'lista'; // lista | cadastra | edita 
  
  public listaMedicos:any[] ;

  public _idx:number = null;

  public medico:any = {};
  public alert:any = {};

  constructor(private  _medicoService:MedicoService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.atualizaListaMedicos();
    this.route.params.subscribe(params =>{

        if(params['action'] == 'cadastrar'){
          this.action = 'cadastrar';
          this.alert = {};
          this.medico = {nome:null,idade:null,sexo:"Masculino"};
        }else if(typeof params['action'] != 'undefined'){
          this.action = 'editar';
          this.alert = {};
          this._idx = params['action'];
          this.medico = this._medicoService.getMedico(this._idx);
        }else{
          this.alert = {};
          this.medico = {};
          this.action = 'listar';
        }
    })
  }

  public atualizaListaMedicos(){
    this.listaMedicos = this._medicoService.getMedicos();
  }
    
  public cadastrar(){
    if(this.action == 'cadastrar'){
      this._medicoService.addMedico(this.medico);
      this.alert = {type:'success',message:"Médico cadastrado com sucesso!"};
      let idxInterval = setInterval(()=>{
        this.router.navigate(['/medico']);
        clearInterval(idxInterval);
      },2000);
      this.atualizaListaMedicos();
    }else{
      this.alert = {type:'success',message:"Não foi possivel cadastra novo médico!"};
    }
  }

  public editar(){
      this._medicoService.editarMedico(this._idx, this.medico);
      this.alert = {type:'success',message:"Alterações salvas com successo"};
      let idxInterval = setInterval(()=>{
        this.router.navigate(['/medico']);
        clearInterval(idxInterval);
      },2000);
      this.atualizaListaMedicos();
  }

  public salvar(){
    if(this._idx !== null && this._idx >= 0){
      this.editar();
    }else{
      this.cadastrar();
    }
  }

  public excluir(idx:number){
    this._medicoService.removeMedico(idx);
    this.atualizaListaMedicos();
    this.alert = {type:'success',message:"Médico removido com sucesso!"};
    
    let idxInterval = setInterval(()=>{
      this.alert = {};
    },2000);
  }
  ngOnInit() {

  }

}
