import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answersArray:any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.answersArray = data['answersArray'];
  }

  ngOnInit(): void {
  }

}
