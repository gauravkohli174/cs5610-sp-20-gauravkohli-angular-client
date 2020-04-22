import {Injectable} from '@angular/core';

@Injectable()

export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cs5610-gk-a9-server.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
