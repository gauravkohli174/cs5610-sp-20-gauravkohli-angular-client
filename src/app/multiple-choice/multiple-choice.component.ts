import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

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
