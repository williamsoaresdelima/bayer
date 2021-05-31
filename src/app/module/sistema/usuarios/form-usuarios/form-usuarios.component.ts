import { UsuarioService } from 'src/app/module/_services/seguranca/usuario.service';
import { User } from './../../../_model/seguranca/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/module/_model/seguranca/Item';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  public objUsuario: User;
  public tipo;

  itemsTipoUsuario: Item [] = [
    {value: '1', viewValue:'Admin'},
    {value: '2', viewValue:'Leitura'},
    {value: '0', viewValue:'Não Informado'},
  ];

  selectTipoUsuario = '0';
  tituloTipoUsuario = 'Tipo de Usuário!';

  constructor( public dialogRef: MatDialogRef<FormUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public toastr:ToastrService) {
      dialogRef.disableClose = true;
      console.log(data);
      this.tipo = data.tipo;
      this.objUsuario = data.objUsuario;

      if(this.tipo!='criar'){
        this.selectTipoUsuario=this.objUsuario.user_type_id;
      }
}

  ngOnInit(): void {
  }


  selecaoItemsTipoUsuario (event){
    this.selectTipoUsuario = event;
  }


  onSubmit(){

      this.dialogRef.close(this.montarObjeto());

      //quando tiver pronto o bak só plugar
    /*
    if(this.tipo==='criar'){
      this.usuarioService.postUsuario(this.montarObjeto()).
      subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      }, error => {
        this.toastr.error('Erro ao buscar contatos');
      });
    }else{
      this.usuarioService.putUsuario(this.objUsuario.id,this.montarObjeto()).
      subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      }, error => {
        this.toastr.error('Erro ao buscar contatos');
      });

    }
    */
  }


  montarObjeto() : User{

    console.log('montando ');

    let item = new User();
    item = this.objUsuario;

    if(this.tipo==='criar'){
      item.id = window.crypto.getRandomValues(new Uint8Array(10)).toString();
      item.createdAt = new Date();
    }else if(this.tipo==='editar'){
      item.updatedAt =  new Date();
    }

    item.user_type_id = this.selectTipoUsuario;
    console.log(item);

    return item;
  }



}
