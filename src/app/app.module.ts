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
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfilAdherentComponent } from './profil-adherent/profil-adherent.component';
import { LineComponent } from './widgets/line/line.component';
import { PieComponent } from './widgets/pie/pie.component';
import { Pie2Component } from './widgets/pie2/pie2.component';
import { QuizComponent } from './quiz/quiz.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NavbarSuppComponent } from './navbar-supp/navbar-supp.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { EntrepriseAreaComponent } from './entreprise-area/entreprise-area.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdherentArchivesComponent } from './adherent-archives/adherent-archives.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import {MatSnackBarModule } from '@angular/material/snack-bar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SidebarEntrepriseComponent } from './sidebar-entreprise/sidebar-entreprise.component';
import { DashboardEntrepriseComponent } from './dashboard-entreprise/dashboard-entreprise.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { AddCompetenceComponent } from './add-competence/add-competence.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormationAdherentComponent } from './formation-adherent/formation-adherent.component';
import { FicheAdhesionComponent } from './fiche-adhesion/fiche-adhesion.component'; 
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

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
    LineComponent,
    PieComponent,
    Pie2Component,
    QuizComponent,
    SidebarComponent,
    NavbarSuppComponent,
    ListCandidatComponent,
    ProfilCandidatComponent,
    EntrepriseAreaComponent,
    AdherentArchivesComponent,
    SidebarAdminComponent,
    ProfilAdminComponent,
    SidebarEntrepriseComponent,
    DashboardEntrepriseComponent,
    ProfilEntrepriseComponent,
    AddCompetenceComponent,
    DynamicComponent,
    FormationAdherentComponent,
    FicheAdhesionComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    HighchartsChartModule,
    MatSliderModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule,
    FullCalendarModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
    
    
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
