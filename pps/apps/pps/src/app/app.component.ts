import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@pps/ui/navbar';

@Component({
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  selector: 'pps-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pps';

  readonly logoUrl = '../assets/nav-logo.svg';
}
