import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { UsuarioService } from 'src/app/module/_services/seguranca/usuario.service';
import { User } from './../../_model/seguranca/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nickname', 'phone', 'email','active', 'acao'];
  dataSource: MatTableDataSource<User>;

  public listaUsuario: User[] = [];

  public loading=true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog,) {

 }


  ngOnInit(): void {
   this.get();
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  visualizar(row) {
    const dialogRef = this.dialog.open(FormUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'visualizar',
        objUsuario: row,
      }
    });
  }

  criar() {
    const dialogRef = this.dialog.open(FormUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'criar',
        objUsuario: new User(),
      }
    }).afterClosed().subscribe(
      (res)=>{
        if(res){
          this.listaUsuario.push(res);
          this.get();
        }
      }
    );
  }

  editar(row) {
    const dialogRef = this.dialog.open(FormUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'editar',
        objUsuario: row,
      }
    }).afterClosed().subscribe(
      (res)=>{
        if(res){

         // this.get();
        }
      }
    );
  }

  excluir(row) {
    let id = row.id;
    let index: number = this.listaUsuario.findIndex(d => d === row);
    this.listaUsuario.splice(index,1)
    this.dataSource = new MatTableDataSource(this.listaUsuario);
    this.toastr.success('Excluído com sucesso!');

    //quando back pronto somente descomentar
    /*
    this.usuarioService.deleteUsuario(id).subscribe(
      (res) =>{
           this.toastr.success('Excluído com sucesso!');
          let index: number = this.listaUsuario.findIndex(d => d === row);
          this.listaUsuario.splice(index,1)
          this.dataSource = new MatTableDataSource(this.listaUsuario);
      },
      (err) => this.toastr.error('Erro ao excluir:  ' + err)
    );
    */
  }

  get(){

    this.dataSource = new MatTableDataSource(this.listaUsuario);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loading=false;

    //quando back pronto somente descomentar
    /*
    this.usuarioService.getUsuarios().
    subscribe(res => {
      this.listaUsuario = res as User [];
      this.dataSource = new MatTableDataSource(this.listaUsuario);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading=false;

    }, error => {

      if(error.status===404){
        this.loading=false;
      }else{
          this.toastr.error('Erro ao buscar usuários');
          this.toastr.error(error);
      }
    });
    */
  }
}
