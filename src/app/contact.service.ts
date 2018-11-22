import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[]{
    return CONTACTS;
  };

  
}
