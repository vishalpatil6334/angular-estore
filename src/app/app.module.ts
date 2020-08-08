
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';


import { UserService } from './share-service/user.service';
import { AuthGuard } from './auth.guard';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavHalfComponent } from './nav-half/nav-half.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SidenavTwoComponent } from './sidenav-two/sidenav-two.component';












@NgModule({
  declarations: [
    AppComponent,
    NavHalfComponent,
    LogInComponent,
    HomeComponent,
    ErrorComponent,
    SidenavTwoComponent,
   
   
      
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatExpansionModule,
    


  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
