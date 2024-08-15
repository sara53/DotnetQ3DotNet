import { Component } from '@angular/core';
import { CheckOneWayBindingComponent } from './components/oneWayBinding/check-one-way-binding.component';
import { CheckTwoWayComponent } from './components/twoWayBinding/check-two-way.component';
import { CheckDirectivesComponent } from './components/Directives/check-directives.component';
import { TodosComponent } from './components/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CheckOneWayBindingComponent,
    CheckTwoWayComponent,
    CheckDirectivesComponent,
    TodosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day02';
}
