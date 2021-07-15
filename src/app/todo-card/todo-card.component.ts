import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  constructor() { }
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() description = '';
  @Input() dueDate = '';
  ngOnInit(): void {
  }

}
