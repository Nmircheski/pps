import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@pps/ui/footer';
import { NavbarComponent } from '@pps/ui/navbar';

@Component({
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  selector: 'pps-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pps';

  readonly logoUrl = '../assets/nav-logo.svg';
}
