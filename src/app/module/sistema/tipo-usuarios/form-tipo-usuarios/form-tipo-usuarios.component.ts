import { TipoUsuarioService } from './../../../_services/seguranca/tipoUsuario.service';
import { User_type } from './../../../_model/seguranca/user_type';
import { UsuarioService } from 'src/app/module/_services/seguranca/usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/module/_model/seguranca/Item';

@Component({
  selector: 'app-form-tipo-usuarios',
  templateUrl: './form-tipo-usuarios.component.html',
  styleUrls: ['./form-tipo-usuarios.component.css']
})
export class FormTipoUsuariosComponent implements OnInit {

  public objTipoUsuario: User_type;
  public tipo;

  constructor( public dialogRef: MatDialogRef<FormTipoUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private tipoUsuarioService: TipoUsuarioService,
    public toastr:ToastrService) {
      dialogRef.disableClose = true;
      console.log(data);
      this.tipo = data.tipo;
      this.objTipoUsuario = data.objTipoUsuario;
}

  ngOnInit(): void {
  }

  onSubmit(){

      this.dialogRef.close(this.montarObjeto());

      //quando tiver pronto o bak só plugar
    /*
    if(this.tipo==='criar'){
      this.tipoUsuarioService.postTipoUsuario(this.montarObjeto()).
      subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      }, error => {
        this.toastr.error('Erro ao buscar contatos');
      });
    }else{
      this.tipoUsuarioService.putTipoUsuario(this.objTipoUsuario.id, this.montarObjeto()).
      subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      }, error => {
        this.toastr.error('Erro ao buscar contatos');
      });

    }
    */

  }


  montarObjeto() : User_type{

    console.log('montando ');

    let item = new User_type();
    item = this.objTipoUsuario;

    if(this.tipo==='criar'){
      item.id = window.crypto.getRandomValues(new Uint8Array(10)).toString();
      item.createdAt = new Date();
    }else if(this.tipo==='editar'){
      item.updatedAt =  new Date();
    }
    console.log(item);

    return item;
  }
}
