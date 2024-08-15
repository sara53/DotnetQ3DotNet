import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-two-way.component.html',
  styleUrl: './check-two-way.component.css',
})
export class CheckTwoWayComponent {
  // @ViewChild('myH1') element: any;
  inputValue: string = '';
  selectValue: string = '';

  getInputData(value: string) {
    console.log(value);
    // this.inputValue = e.target.value;
    // console.log(this.inputValue);
  }
  showData(element: any) {
    console.log(element.textContent);
  }
}
