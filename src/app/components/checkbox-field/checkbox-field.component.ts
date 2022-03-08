import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
  @Input() question:any;
  constructor() { }

  ngOnInit(): void {
  }

}
