import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ROUTING } from './app-routing';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CloudComponent } from './pages/cloud/cloud.component';
import { HeaderComponent } from './_component/header/header.component';
import { EnablementComponent } from './pages/cloud/enablement/enablement.component';
import { ConnectivityComponent } from './pages/cloud/connectivity/connectivity.component';
import { SecurityComponent } from './pages/cloud/security/security.component';
import { ManagedServicesComponent } from './pages/cloud/managed-services/managed-services.component';
import { IncComponent } from './pages/cloud/inc/inc.component';
import { AnalyticsComponent } from './pages/cloud/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CloudComponent,
    HeaderComponent,
    EnablementComponent,
    ConnectivityComponent,
    SecurityComponent,
    ManagedServicesComponent,
    IncComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
