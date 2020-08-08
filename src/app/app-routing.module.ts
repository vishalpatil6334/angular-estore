import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { NavHalfComponent } from './nav-half/nav-half.component';
import { LogInComponent } from './log-in/log-in.component';




const routes: Routes = [
  
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', component: LogInComponent  },
  { path: 'sidenav', component: NavHalfComponent ,
  canActivate: [AuthGuard],
  children: [

    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },

    {
     path: 'dashboard',
     loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
         m => m.DashboardModule
       )
      },

      
    {
      path: 'sale',
      loadChildren: () =>
       import('./pages/sale/sale.module').then(
          m => m.SaleModule
        )
       },
       {
        path: 'catlog',
        loadChildren: () =>
         import('./pages/catlog/catlog.module').then(
            m => m.CatlogModule
          )
         },
         {
          path: 'custmor',
          loadChildren: () =>
           import('./pages/custmor/custmor.module').then(
              m => m.CustmorModule
            )
           },
           {
            path: 'content',
            loadChildren: () =>
             import('./pages/content/content.module').then(
                m => m.ContentModule
              )
             },
             {
              path: 'marketing',
              loadChildren: () =>
               import('./pages/marketing/marketing.module').then(
                  m => m.MarketingModule
                )
               },
               {
                path: 'report',
                loadChildren: () =>
                 import('./pages/report/report.module').then(
                    m => m.ReportModule
                  )
                 },
                 {
                  path: 'system',
                  loadChildren: () =>
                   import('./pages/system/system.module').then(
                      m => m.SystemModule
                    )
                   },
   // {
     // path:'dashboard',component:HomeComponent
       // },
   // {
     // path:'',component:HomeComponent
    //}
  ]
  },
  
   
 

  {
    path:'**',component:ErrorComponent
  }
    
  
  ]
  


 //{
   //  path: 'dashboard',
     //loadChildren: () =>
      //import('./pages/dashboard/dashboard.module').then(
        // m => m.DashboardModule
       //)
      //},

  //}
 //
   // { path: '',
  //loadChildren: () =>
   // import('./components/sidenav/sidenav.module').then(
     // m => m.SidenavModule
    //)}
 // { path: '',
  //loadChildren: () =>
   // import('./pages/login/login.module').then(
     // m => m.LoginModule
    //)},
    //{ path: 'sidenav',
    //canActivate:[AuthGuard],
    //loadChildren: () =>
      //import('./components/sidenav/sidenav.module').then(
        //m => m.SidenavModule
      //),
    //}
  
    


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
