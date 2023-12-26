import { Component } from '@angular/core';
import { copyrightUni } from '../../models/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  protected readonly copyrightUni = copyrightUni;
}