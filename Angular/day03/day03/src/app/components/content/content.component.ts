import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  organizationName: string = 'ITI';

  @Output() myEvent = new EventEmitter();
  sendData() {
    this.myEvent.emit(this.organizationName);
  }
}
