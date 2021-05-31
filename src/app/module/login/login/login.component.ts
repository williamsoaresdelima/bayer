import { User } from './../../_model/seguranca/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../_services/seguranca/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  objUsuario: User;

  public loading=false;

  constructor(private router:Router, private toastr: ToastrService, private usuarioService: UsuarioService) {}

  ngOnInit(){

    this.objUsuario = new User;
    this.objUsuario.nickname="";
    this.objUsuario.password="";
  }

  loggedin(){
    this.usuarioService.loggedIn();
  }

  onSubmit(){
    console.log(this.objUsuario);

    this.loading=true;

    if(this.objUsuario.nickname==='will' && this.objUsuario.password==='will'){
      this.toastr.success('Login efetuado com sucesso!');
      this.loading=false;
      this.router.navigate(['/home']);

    }else{
      this.toastr.error('Login ou senha inválido!');
      this.loading=false;
      this.router.navigate(['/login']);
    }
    // IMPLEMENTAÇÃO DE UM SERVIÇO DE LOGIN QUE JA ME DEVOLVE UM TOKEN

    /*
        this.usuarioService.getUsuario(this.objUsuario.login, this.objUsuario.senha).
          subscribe(res=>{
            console.log(res);
            this.router.navigate(['/home']);
          }, error => {
            console.log('ERRO: ' + JSON.stringify(error));
            this.toastr.error('ERRO: ' + JSON.stringify(error.error.message));
            this.loading=false;
          });
    */
  }

}
