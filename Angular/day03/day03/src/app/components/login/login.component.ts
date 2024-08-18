import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() dataFromParent: string = '';
  @Input() studentDetails: any;
  @Input() dataFromContent: any;
}
