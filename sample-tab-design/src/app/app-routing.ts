import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CloudComponent } from './pages/cloud/cloud.component';
import { EnablementComponent } from './pages/cloud/enablement/enablement.component';
import { ConnectivityComponent } from './pages/cloud/connectivity/connectivity.component';
import { SecurityComponent } from './pages/cloud/security/security.component';
import { ManagedServicesComponent } from './pages/cloud/managed-services/managed-services.component';
import { IncComponent } from './pages/cloud/inc/inc.component';
import { AnalyticsComponent } from './pages/cloud/analytics/analytics.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cloud-details/:id', component: CloudComponent,
    children: [
      { path: '', redirectTo: 'cloud-enablement', pathMatch: 'full' },
      { path: 'cloud-enablement', component: EnablementComponent },
      { path: 'cloud-analytics', component: AnalyticsComponent },
      { path: 'cloud-connectivity', component: ConnectivityComponent },
      { path: 'security-data', component: SecurityComponent },
      { path: 'cloud-managed-services', component: ManagedServicesComponent },
      { path: 'inc-pbi-chg', component: IncComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }

];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
