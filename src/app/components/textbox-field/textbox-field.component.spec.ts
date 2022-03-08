import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxFieldComponent } from './textbox-field.component';

describe('TextboxFieldComponent', () => {
  let component: TextboxFieldComponent;
  let fixture: ComponentFixture<TextboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
