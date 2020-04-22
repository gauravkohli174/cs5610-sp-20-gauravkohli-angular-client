import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../services/question.service.client';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private quizId = '';

  constructor(private svc: QuestionServiceClient,
              private quizService: QuizServiceClient,
              private route: ActivatedRoute) {
  }

  questions = [];

  grading = false;

  quizResult = {score: -1};

  submitQuiz = () => {
    this.quizService.submitQuiz(this.quizId, this.questions)
      .then(result => this.quizResult = result)
      .then(r => this.grading = true);
  };

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
