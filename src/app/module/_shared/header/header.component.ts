import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../_services/seguranca/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  public nmSistema = "Bayer Teste";
  public nmPerfil = "Perfil Teste";
  public nmUnidade = "Unidade Teste";
  public nmUsuario = "Usuario Teste";

  ngOnInit(){

    if(!this.usuarioService.loggedIn()){
      this.router.navigate(['/login']);
    }
  }

  loggedin(){
    this.usuarioService.loggedIn();
  }

  acessarHome(){
    this.router.navigate(['/home']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
