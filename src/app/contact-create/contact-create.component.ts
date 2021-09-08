import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact!: Contact; // TODO: Check <Contact>{}

  constructor(public dataService: ContactService) { }

  ngOnInit() {
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {} as Contact;

  }
}
