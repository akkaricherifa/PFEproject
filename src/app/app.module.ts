import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from  '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListAdherentsComponent } from './list-adherents/list-adherents.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardAdherentsComponent } from './dashboard-adherents/dashboard-adherents.component';
import { LoginComponent } from './login/login.component';
import { CandidatAreaComponent } from './candidat-area/candidat-area.component';
import { ReponseCandidatComponent } from './reponse-candidat/reponse-candidat.component';
import { PubliclayoutComponent } from './publiclayout/publiclayout.component';
import { UpdateAdherentComponent } from './update-adherent/update-adherent.component';
import { EspaceRHComponent } from './espace-rh/espace-rh.component';
import { ChangerPwdComponent } from './changer-pwd/changer-pwd.component';
import { InfoAdherentComponent } from './info-adherent/info-adherent.component';
import { PlanFormationComponent } from './plan-formation/plan-formation.component';
import { ChartComponent } from './chart/chart.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfilAdherentComponent } from './profil-adherent/profil-adherent.component' ;






@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    InscriptionComponent,
    NavbarComponent,
    FooterComponent,
    ListAdherentsComponent,
    DashboardAdminComponent,
    DashboardAdherentsComponent,
    LoginComponent,
    CandidatAreaComponent,
    ReponseCandidatComponent,
    PubliclayoutComponent,
    UpdateAdherentComponent,
    EspaceRHComponent,
    ChangerPwdComponent,
    InfoAdherentComponent,
    PlanFormationComponent,
    ChartComponent,
    ProfilAdherentComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
