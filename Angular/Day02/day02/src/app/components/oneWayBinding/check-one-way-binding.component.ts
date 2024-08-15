import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './check-one-way-binding.component.html',
  styleUrl: './check-one-way-binding.component.css',
})
export class CheckOneWayBindingComponent {
  trackName: string = 'Dotnet Track';
  flag: boolean = true;
  imgSrc1: string = '1.jpg';
  imgSrc2: string = 'Images/2.jpg';

  toggle() {
    this.flag = !this.flag;
    this.trackName = 'React Track';
    this.imgSrc1 = '3.jpg';
  }
}
