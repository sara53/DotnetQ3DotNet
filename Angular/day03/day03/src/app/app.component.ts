import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dataFromChild: string = '';

  trackName: string = 'Dotnet track';
  student: any = { id: 1, name: 'Ali', age: 20 };

  getData(x: string) {
    this.dataFromChild = x;
  }
}
