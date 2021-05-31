import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../../_model/seguranca/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.apiUrl;

  private _getUserAuthentication = environment.getUserAuthentication;
  private _getUsuarios = environment.getUsuarios;
  private _getUsuarioById = environment.getUsuarioById;
  private _putUsuario = environment.putUsuario;
  private _postUsuario = environment.postUsuario;
  private _deleteUsuario = environment.deleteUsuario;

  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  getUsuarioById(idUsuario): Observable<any>{
    return this.http.get(this.apiUrl + this._getUsuarioById);
  }

  getUsuarios(): Observable<any>{
    return this.http.get(this.apiUrl + this._getUsuarios);
  }

  postUsuario(user){
    return this.http.post(this.apiUrl + this._postUsuario, user);
  }

  putUsuario(id, usuario){
    return this.http.put(this.apiUrl + this._putUsuario+ '/' + id, usuario);
  }

  deleteUsuario(id){
    return this.http.delete(this.apiUrl + this._deleteUsuario+ '/' + id);
  }

  getUsuario(nickname, password){
    var AuthenticateRequest = { nickname : nickname,  password: password};
    return this.http.post(this._getUserAuthentication, AuthenticateRequest).pipe(
      map((response:any)=>{
        console.log(response);
        if(response){
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
      })
    );
  }

  getUser(): User {
    let user :User = JSON.parse(localStorage.getItem('user')) as User;
    return user;
  }

  loggedIn(){

    //QUANDO IMPLEMENTAR TOKEN AI COLOCA A VERIFICACAO

    /*
    const token = localStorage.getItem('token');

    console.log(token);
    if(token){
      return !this.jwtHelper.isTokenExpired(token);
    }else{
      return false;
    }
    */

    return true;
  }
}
