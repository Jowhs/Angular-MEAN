import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'CRUD';
  public msg:string = '';
  public employees = [
  	{'name': 'John', 'position': 'Manager', 'email': 'email@email.com'},
  	{'name': 'Sam', 'position': 'Programmer', 'email': 'email@email.com'},
  	{'name': 'Peter', 'position': 'Designer', 'email': 'email@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = "Data has been successfully added";
  }

  deleteEmployee(i):void{
    //alert('Deleted');
    var answer = confirm('Are you sure you want to delete?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = "Data has been deleted successfully "; 
    }
    
  }

  myValue;
  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;  
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "Data has been updated successfully."
      }
    }
  }

  closeAlert(){
    this.msg = '';
  }

}
