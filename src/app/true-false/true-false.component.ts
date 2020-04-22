import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  constructor() {
  }

  @Input()
  question = {_id: '', title: '', question: '', correct: '', choices: [], type: '', answer: ''};
  @Input()
  answer = '';
  @Input()
  grading = false;

  @Output()
  answerChange = new EventEmitter<string>();

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
  };

  ngOnInit(): void {
  }

}
