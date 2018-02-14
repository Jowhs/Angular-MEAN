import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './app.todo.html',
    /*styleUrls: [
        '../assets/css/docs.min.css'
    ]*/
})
export class TodoComponent {
	public location = '';
	constructor(private router: Router){
		this.location = router.url;
	};
	public task: string;
	public tasks: any[];
	onClick(){
		this.tasks.push({name: this.task});
		this.task = '';
	}

};