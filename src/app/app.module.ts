import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { ResultComponent } from './components/result/result.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { RadioFieldComponent } from './components/radio-field/radio-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { TextboxFieldComponent } from './components/textbox-field/textbox-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ResultComponent,
    RadioFieldComponent,
    CheckboxFieldComponent,
    TextboxFieldComponent,
    TextareaFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
