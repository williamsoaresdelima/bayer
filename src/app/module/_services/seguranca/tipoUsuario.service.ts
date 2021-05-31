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
export class TipoUsuarioService {

  private apiUrl = environment.apiUrl;

  private _getTipoUsuarios = environment.getTipoUsuarios;
  private _getTipoUsuarioById = environment.getTipoUsuarioById;
  private _putTipoUsuario = environment.putTipoUsuario;
  private _postTipoUsuario = environment.postTipoUsuario;
  private _deleteTipoUsuario = environment.deleteTipoUsuario;

  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  getTipoUsuarioById(idTipoUsuario): Observable<any>{
    return this.http.get(this.apiUrl + this._getTipoUsuarioById + '/' + idTipoUsuario);
  }

  getTipoUsuarios(): Observable<any>{
    return this.http.get(this.apiUrl + this._getTipoUsuarios);
  }

  postTipoUsuario(user){
    return this.http.post(this.apiUrl + this._postTipoUsuario, user);
  }

  putTipoUsuario(id, tipoUsuario){
    return this.http.put(this.apiUrl + this._putTipoUsuario+ '/' + id, tipoUsuario);
  }

  deleteTipoUsuario(id){
    return this.http.delete(this.apiUrl + this._deleteTipoUsuario+ '/' + id);
  }

}
