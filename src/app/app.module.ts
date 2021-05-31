import { PipeCelular } from './module/_pipe/pipe-celular.pipe';
import { AuthInterceptor } from './module/_auth/auth.interceptor';
import { LoginModule } from './module/login/login.module';
import { NgModule,LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './module/_shared/header/header.component';
import { FooterComponent } from './module/_shared/footer/footer.component';
import { MenuLateralComponent } from './module/_shared/menu-lateral/menu-lateral.component';
import { ComboComponent } from './module/_shared/combo/combo.component';
import { BannerComponent } from './module/_shared/banner/banner.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PopupConfirmacaoComponent } from './module/_shared/popup-confirmacao/popup-confirmacao.component';
import { DatePipe } from '@angular/common';
import { PipeTelefone } from './module/_pipe/pipe-telefone.pipe';
import { PipeCep } from './module/_pipe/pipe-cep.pipe';
import { UsuariosComponent } from './module/sistema/usuarios/usuarios.component';
import { TipoUsuariosComponent } from './module/sistema/tipo-usuarios/tipo-usuarios.component';
import { FormUsuariosComponent } from './module/sistema/usuarios/form-usuarios/form-usuarios.component';
import { FormTipoUsuariosComponent } from './module/sistema/tipo-usuarios/form-tipo-usuarios/form-tipo-usuarios.component';

@NgModule({
  entryComponents: [
    PopupConfirmacaoComponent,
    FormTipoUsuariosComponent,
    FormUsuariosComponent,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuLateralComponent,
    ComboComponent,
    BannerComponent,
    PopupConfirmacaoComponent,
    PipeCelular,
    PipeTelefone,
    PipeCep,
    UsuariosComponent,
    TipoUsuariosComponent,
    FormUsuariosComponent,
    FormTipoUsuariosComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    DragDropModule,
    MatTreeModule,
    MatTooltipModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgxMaskModule,
    MatTooltipModule,

  ],
  providers: [


    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },{provide: LOCALE_ID, useValue: "pt-BR"},
     DatePipe,

  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
