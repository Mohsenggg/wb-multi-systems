import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkComponent } from './components/work/work.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  
  { path: '', redirectTo:'/home', pathMatch:'full'}, 
 
  { path: 'home', component: HomeComponent},

  { path: 'about', component: AboutComponent},
  
  { path: 'services', component: ServicesComponent },
  
  { path: 'work', component: WorkComponent},
  
  { path: 'partners', component: PartnersComponent},
  
  { path: 'contact', component: FooterComponent}
  
];