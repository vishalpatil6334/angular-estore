import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share-service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-half',
  templateUrl: './nav-half.component.html',
  styleUrls: ['./nav-half.component.css'],
  
})
export class NavHalfComponent implements OnInit {
  userdispalyName='';
 opened=false;
  panelOpenState = false;

  sidenavWidth = 4;
  ngStyle: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
this.userdispalyName=JSON.parse(localStorage.getItem('login'));
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
