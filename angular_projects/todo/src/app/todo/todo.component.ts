import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	public title;
	public description;
	public tasks = [];

	public addTask(){
		this.tasks.push({title: this.title, description: this.description});
	}

  constructor() { }

  ngOnInit() {
  }

}
