import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuestionnaireComponent } from './questionnaire.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
      ],
      declarations: [ QuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`questions length`, () => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    expect(component.data.questions.length).toBe(18);
  });

  it(`checking questionnaire heading`, () => {
   const tag = fixture.nativeElement;
   const heading = fixture.debugElement.query(By.css('.heading'))
   expect(heading.nativeElement.textContent.trim()).toBe("Privathaftpflichtversicherung");
  });

});
