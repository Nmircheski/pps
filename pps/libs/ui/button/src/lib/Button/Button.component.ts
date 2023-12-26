import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pps-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Button.component.html',
  styleUrl: './Button.component.scss',
})
export class ButtonComponent {}
