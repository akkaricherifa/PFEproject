import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdherentArchivesComponent } from './adherent-archives/adherent-archives.component';
import { CandidatAreaComponent } from './candidat-area/candidat-area.component';
import { ChangerPwdComponent } from './changer-pwd/changer-pwd.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardAdherentsComponent } from './dashboard-adherents/dashboard-adherents.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardEntrepriseComponent } from './dashboard-entreprise/dashboard-entreprise.component';
import { EntrepriseAreaComponent } from './entreprise-area/entreprise-area.component';
import { EspaceRHComponent } from './espace-rh/espace-rh.component';
import { InfoAdherentComponent } from './info-adherent/info-adherent.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListAdherentsComponent } from './list-adherents/list-adherents.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { LoginComponent } from './login/login.component';
import { NavbarSuppComponent } from './navbar-supp/navbar-supp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanFormationComponent } from './plan-formation/plan-formation.component';
import { ProfilAdherentComponent } from './profil-adherent/profil-adherent.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { PubliclayoutComponent } from './publiclayout/publiclayout.component';
import { ReponseCandidatComponent } from './reponse-candidat/reponse-candidat.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarEntrepriseComponent } from './sidebar-entreprise/sidebar-entreprise.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateAdherentComponent } from './update-adherent/update-adherent.component';
 

const routes: Routes = [
  {
    path: '',
    component: PubliclayoutComponent,
    children: [
      { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'login', component: LoginComponent },
      { path: 'candidat', component: CandidatAreaComponent },
      { path: 'reponse-candidat', component: ReponseCandidatComponent },
    ],
  },

  
  { path: 'dashboard-adherents', component: DashboardAdherentsComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'update-adherent', component: UpdateAdherentComponent },
  { path: 'list-adherent', component: ListAdherentsComponent },
  { path: 'info-adherent', component: InfoAdherentComponent },
  { path: 'espace-rh', component: EspaceRHComponent },
  { path: 'plan-formation', component: PlanFormationComponent },
  { path: 'update-adherent', component: UpdateAdherentComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'profil-adherent/:id',component:ProfilAdherentComponent },
  { path:'side-bar',component:SidebarComponent},
  { path: 'changerPWD',component:ChangerPwdComponent},
  { path :'navbar-supp',component:NavbarSuppComponent},
  { path:'list-candidat',component:ListCandidatComponent},
  { path:'profil-candidat/:id',component:ProfilCandidatComponent},
  { path:'entrepriseArea',component:EntrepriseAreaComponent},
  { path:'list-archive', component:AdherentArchivesComponent},
  { path:'sidebar-admin',component:SidebarAdminComponent},
  { path:'profil-admin',component:ProfilAdminComponent},
  { path:'sidebar-entreprise',component:SidebarEntrepriseComponent},
  { path:'dashboard-entreprise',component:DashboardEntrepriseComponent},
  { path:'profil-entreprise/:id',component:ProfilEntrepriseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
