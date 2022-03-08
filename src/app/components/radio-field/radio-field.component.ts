import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss']
})
export class RadioFieldComponent implements OnInit {
  @Input() question:any;
  constructor() { }

  ngOnInit(): void {
  }

}
