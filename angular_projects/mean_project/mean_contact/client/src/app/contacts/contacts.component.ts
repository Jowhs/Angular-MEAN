import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
	public contacts: Contact[];
	public contact: Contact;
	public first_name:string;
	public last_name:string;
	public phone:string;

  constructor(private contactService: ContactService) {
  		this.contacts = [];
   }

  addContact(){
  	const newContact = {
  		first_name: this.first_name,
  		last_name: this.last_name,
  		phone: this.phone
  	}
  	this.contactService.addContact(newContact)
  		.subscribe((response) => {
  			//console.log(this.contacts);
  			this.contacts.push(response.data);
  		});
  }

  deleteContact(id:any){
  	this.contactService.deleteContact(id)
  		.subscribe((data) =>{
  			if(data.n==1){
  				for(var i = 0; i < this.contacts.length; i++)
  				{
  					if(this.contacts[i]._id == id)
  					{
  						this.contacts.splice(i, 1);
  					}
  				}
  			}
  		})
  }

  ngOnInit() {
  	this.contactService.getContacts()
  		.subscribe((contacts) => {
  			//console.log(contacts);
  			this.contacts = contacts;
  		});
  }

}
