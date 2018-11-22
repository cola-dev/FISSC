import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: '[app-editable-contact]',
  templateUrl: './editable-contact.component.html',
  styleUrls: ['./editable-contact.component.css']
})
export class EditableContactComponent implements OnInit {

  @Input() contact: Contact;

  editing = false;

  onEdit(): void {
      this.editing = ! this.editing;
  }

  constructor() { }

  ngOnInit() {
  }

}