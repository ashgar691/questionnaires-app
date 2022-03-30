import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { QuestionBase } from '../models/question';
import { CheckboxQuestion } from '../models/question-checkbox';
import { MultipleQuestion } from '../models/question-multiple';
import { TextboxQuestion } from '../models/question-textbox';

CheckboxQuestion

@Injectable()
export class QuestionService {

  dataUrl: string = environment.urlServer + 'questionnaires/1'
  constructor(private http: HttpClient) { }


  getQuestions(): Observable<any> {
    return this.http.get(this.dataUrl).pipe(map((data: any) => {
      const questions: QuestionBase<string>[] = [];
      data.questions.forEach((element: any) => {
        if (element.type == "multiple") {
          questions.push(new MultipleQuestion(element));
        }
        if (element.type == "text") {
          questions.push(new TextboxQuestion(element));
        }
        if (element.type == "choice") {
          questions.push(new CheckboxQuestion(element));
        }
      });
      return questions.sort((a, b) => a.order - b.order);
    }));
  }



}