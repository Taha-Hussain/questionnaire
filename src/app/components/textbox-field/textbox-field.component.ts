import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox-field',
  templateUrl: './textbox-field.component.html',
  styleUrls: ['./textbox-field.component.scss']
})
export class TextboxFieldComponent implements OnInit {
  @Input() question:any;
  constructor() { }

  ngOnInit(): void {
  }

}
