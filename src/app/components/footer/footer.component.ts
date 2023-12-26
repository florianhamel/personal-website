import { Component } from '@angular/core';
import { copyrightUni } from '../../models/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  protected readonly copyrights: string = `${copyrightUni} 2024 florianhamel.com | All rights reserved`;
}
