import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
