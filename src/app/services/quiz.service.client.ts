import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://cs5610-gk-a9-server.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://cs5610-gk-a9-server.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())

  submitQuiz = (quizId, questions) => fetch(`https://cs5610-gk-a9-server.herokuapp.com/api/quizzes/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());
}

