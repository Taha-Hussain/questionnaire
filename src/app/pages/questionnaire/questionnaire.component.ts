import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from 'src/app/components/result/result.component';
import { Answer } from 'src/app/models/answer';
import { Choice } from 'src/app/models/choice';
import { Jump } from 'src/app/models/jump';
import { Question } from 'src/app/models/question';
import { Questionnaire } from 'src/app/models/questionnaire';
import jsonData from 'src/assets/json/questionnaire.json';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('showHideAnimation', [

      state('in', style({ transform: 'translateX(0) scale(1)' })),
      state('out', style({ transform: 'translateX(0) scale(1)' })),
      transition('out => void', [
        style({ transform: 'translateY(-100%) scale(1)' }),
        animate(300)
      ]),
      transition('void => in', [
        animate(300, style({ transform: 'translateY(-100%) scale(1)' }))
      ]),
      transition('void => out', [
        animate(300, style({ transform: 'translateY(100%) scale(1)' }))
      ])
    ])
  ]
})
export class QuestionnaireComponent implements OnInit {
  data: Questionnaire;
  selectedQuestion: string = "";
  identifiers: string[] = [];
  identifierIndex = 0;
  animationState = "in";
  history: string[] = [];
  constructor(public dialog: MatDialog) {
    this.data = JSON.parse(JSON.stringify(jsonData['questionnaire']));
  }

  ngOnInit(): void {
    this.getAllIdentifiers(jsonData['questionnaire']);
    this.selectedQuestion = this.data['questions'][this.identifierIndex]['identifier'];
    this.history = [...this.history, this.selectedQuestion];
  }

  getAllIdentifiers(data: Questionnaire) {
    data['questions'].forEach((item: Question) => {
      this.identifiers.push(item['identifier']);
    });
  }

  next(identifierIndex: number) {
    this.animationState = "in";
    let question = this.data['questions'].find((item: Question) => {
      return item['identifier'] == this.selectedQuestion;
    })
    if (question && question['jumps'] && question['jumps'].length) {
      if (!this.checkJump(question)) {
        this.identifierIndex = identifierIndex + 1;
        this.selectedQuestion = this.identifiers[this.identifierIndex];
        this.history = [...this.history, this.selectedQuestion];
      }
    }
    else {
      this.identifierIndex = identifierIndex + 1;
      this.selectedQuestion = this.identifiers[this.identifierIndex];
      this.history = [...this.history, this.selectedQuestion];
    }
  }

  previous() {
    this.animationState = "out";
    this.history.pop();
    this.selectedQuestion = this.history[this.history.length - 1];
    this.identifierIndex = this.identifiers.indexOf(this.selectedQuestion);
  }

  checkJump(question: Question) {
    let result = question['jumps'].find((jump: Jump) => {
      return jump['conditions'][0]['value'] == question['answer'];
    });
    if (result) {
      this.selectedQuestion = result['destination']['id'];
      this.identifierIndex = this.identifiers.indexOf(this.selectedQuestion);
      this.history = [...this.history, this.selectedQuestion];
      return true;
    }
    else {
      return false;
    }
  }

  submit() {
    this.showResult();
  }

  showResult() {
    let answersArray: Answer[] = [];
    this.data['questions'].forEach((question: Question) => {
      var response = this.formatAnswers(question);
      if (response) {
        answersArray.push(response);
      }
    });
    this.dialog.open(ResultComponent, {
      maxHeight: '80vh',
      data: {
        answersArray
      }
    });
  }

  formatAnswers(question: Question) {
    var obj: Answer = {
      question: '',
      answer: []
    };
    obj['question'] = question['headline'];
    obj['answer'] = [];
    if (question['question_type'] == 'multiple-choice' && question['multiple'] == 'true' && question['choices']) {
      question['choices'].forEach((choice: Choice) => {
        if (choice['selected']) {
          obj['answer'].push(choice['value']);
        }
      });

    }
    else if ((question['question_type'] == 'multiple-choice' && question['multiple'] == 'false') || question['question_type'] == 'text') {
      if (question['answer']) {
        obj['answer'].push(question['answer']);
      }
    }
    if (obj['answer'].length) {
      return obj;
    }
    else {
      return false;
    }
  }

  refreshForm() {
    this.history = [];
    this.identifierIndex = 0;
    this.data = JSON.parse(JSON.stringify(jsonData['questionnaire']));
    this.selectedQuestion = this.data['questions'][this.identifierIndex]['identifier'];
    this.history = [...this.history, this.selectedQuestion];
  }

  identifier(index: number, item: Question) {
    return item.identifier;
  }
}
