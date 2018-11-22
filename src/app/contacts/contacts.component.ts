import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  //contact: Contact = {
    //name: "Pepe", phone: 12345
  //};
  contacts: Contact[];
  selectedContact: Contact;
  newContact: Contact = {
    name:"",
    phone: null
  };

  constructor() { }

  onEdit(contact: Contact): void {
    this.selectedContact = contact;
  }

  addContact(): void {
    this.contacts.push(this.newContact);
    this.newContact = {
      name: null,
      phone: null
    };    
}


  //contact ="Pepe";

  ngOnInit() {
  }

}
