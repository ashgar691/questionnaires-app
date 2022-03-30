import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question';
import { QuestionService } from './services/question.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService]
})

export class AppComponent implements OnInit {

  title = 'questionnaires-app';

  questions$: Observable<QuestionBase<any>[]> | undefined;

  constructor(private questionService: QuestionService) {

    this.questions$ = this.questionService.getQuestions();
    
  }

  ngOnInit(): void {
    // this.questionService.getQuestions().subscribe(res=>{
    //   console.log(res);
    // })

  }
}
