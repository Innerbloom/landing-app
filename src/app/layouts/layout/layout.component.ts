import { Component } from '@angular/core';
import {HomeComponent} from '../../components/home/home.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
