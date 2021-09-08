import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact | undefined;

  constructor(public dataService: ContactService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();    
  }
  public selectContact(contact: Contact){
    this.selectedContact = contact;
  }
}
