import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Kind abhollen", done: true },
    { description: "Yoga", done: false },
    { description: "Shopping", done: false },
    { description: "Homework", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  
}
