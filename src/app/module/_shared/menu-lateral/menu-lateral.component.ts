import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../_services/seguranca/usuario.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit{
  private tamanhoTela;
  public nmSistema='Bayer Teste';

  constructor(private router:Router,
    public usuarioService: UsuarioService) {
  }

  ngOnInit(){
    this.tamanhoTela = window.innerWidth;
    console.log('tamanho tela: ' + this.tamanhoTela);
    if(this.tamanhoTela<800){
      document.getElementById("mySidenav").style.width = "0px";
    }else{
      document.getElementById("mySidenav").style.width = "250px";
    }
  }

  openNav() {
    if(this.tamanhoTela<800){
      document.getElementById("mySidenav").style.width = "100%";
    }else{
      document.getElementById("mySidenav").style.width = "250px";
    }
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
