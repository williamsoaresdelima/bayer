import { FormTipoUsuariosComponent } from './form-tipo-usuarios/form-tipo-usuarios.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import { TipoUsuarioService } from './../../_services/seguranca/tipoUsuario.service';
import { User_type } from '../../_model/seguranca/user_type';

@Component({
  selector: 'app-tipo-usuarios',
  templateUrl: './tipo-usuarios.component.html',
  styleUrls: ['./tipo-usuarios.component.css']
})
export class TipoUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'active', 'acao'];
  dataSource: MatTableDataSource<User_type>;

  public listaTipoUsuario: User_type[] = [];

  public loading=true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tipoUsuarioService: TipoUsuarioService,
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
    const dialogRef = this.dialog.open(FormTipoUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'visualizar',
        objTipoUsuario: row,
      }
    });
  }

  criar() {
    const dialogRef = this.dialog.open(FormTipoUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'criar',
        objTipoUsuario: new User_type(),
      }
    }).afterClosed().subscribe(
      (res)=>{
        if(res){
          this.listaTipoUsuario.push(res);
          this.get();
        }
      }
    );
  }

  editar(row) {
    const dialogRef = this.dialog.open(FormTipoUsuariosComponent, {
      width: window.innerWidth<800? '90%' :'75%',
      data:{
        tipo:'editar',
        objTipoUsuario: row,
      }
    });
  }

  excluir(row) {
    let id = row.id;

    let index: number = this.listaTipoUsuario.findIndex(d => d === row);
    this.listaTipoUsuario.splice(index,1);
    this.dataSource = new MatTableDataSource(this.listaTipoUsuario);
    this.toastr.success('Excluído com sucesso!');


    //quando back pronto somente descomentar

    /*
    this.tipoUsuarioService.deleteTipoUsuario(id).subscribe(
      (res) =>{
        this.toastr.success('Excluído com sucesso!');
          let index: number = this.listaTipoUsuario.findIndex(d => d === row);
          this.listaTipoUsuario.splice(index,1);
          this.dataSource = new MatTableDataSource(this.listaTipoUsuario);
      },
      (err) => this.toastr.error('Erro ao excluir tipo de usuários:  ' + err)
    );
    */
  }

  get(){

    this.dataSource = new MatTableDataSource(this.listaTipoUsuario);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loading=false;
    //quando tiver o back pronto somente descomentar

    /*
      this.tipoUsuarioService.getTipoUsuarios().
      subscribe(res => {
        this.listaTipoUsuario = res as User_type [];
        this.dataSource = new MatTableDataSource(this.listaTipoUsuario);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loading=false;

      }, error => {

        if(error.status===404){
          this.loading=false;
        }else{
            this.toastr.error('Erro ao buscar tipo de usuários');
            this.toastr.error(error);
        }
      });
    */
  }

}
