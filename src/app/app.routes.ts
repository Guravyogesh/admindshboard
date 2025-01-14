import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { LayoutComponent } from './common-component/layout/layout.component';
import { DashboardComponent } from './core-component/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'layout', component: LayoutComponent ,  children: [{
      path: '',
      component: DashboardComponent
    }]}
  ];
