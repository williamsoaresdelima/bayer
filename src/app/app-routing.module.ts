import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login/login.component';
import { UsuariosComponent } from './module/sistema/usuarios/usuarios.component';
import { TipoUsuariosComponent } from './module/sistema/tipo-usuarios/tipo-usuarios.component';
import { AuthGuard } from './module/_auth/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'tipousuarios', component: TipoUsuariosComponent },
  {path: 'logusuarios', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
