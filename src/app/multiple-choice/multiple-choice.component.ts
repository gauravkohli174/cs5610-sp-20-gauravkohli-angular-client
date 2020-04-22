import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  constructor() { }

  @Input()
  // question = {};
  question = {_id: '', title: '', question: '', answer: '', correct: '', choices: []};
  grading = false;
  // faCheck = faCheck;
  // faTimes = faTimes;

  graded = () => {
    this.grading = true;
  }

  ngOnInit(): void {
  }

}
