import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todoValue: string = '';
  todosList: string[] = [];
  flag: boolean = false;
  addTodo() {
    this.todosList.push(this.todoValue);
    this.todoValue = '';
  }

  toggle() {
    this.flag = !this.flag;
  }
  removeTodo(todoIndex: number) {
    this.todosList = this.todosList.filter((todo, index) => index != todoIndex);
  }
}
