import { Component } from '@angular/core';
import { copyrightUni } from '../../models/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  protected readonly copyrights: string = `${copyrightUni} florianhamel.com`;
}
