import { Routes } from '@angular/router';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {LayoutComponent} from './layouts/layout/layout.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent }
    ]
  }
];
