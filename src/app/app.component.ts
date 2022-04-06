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

  questions$: Observable<QuestionBase<string>[]> | undefined;

  constructor(private questionService: QuestionService) {

    this.questions$ = this.questionService.getQuestions();

  }

  fizzbuzz(numberOne: number, numberTwo: number) {

    // for (let i = 1; i < 101; i++) console.log((i++ % numberOne ? '' : "Fizz") + (i % numberTwo ? '' : "Buzz") || i)
    for (let i = 1; i < 101; i++) {
      console.log(i + " " + numberOne, numberTwo);
      if (i % numberOne == 0 && i % numberTwo == 0) {
        console.log(i + " " + "fizzBuzz")
      } else if (i % numberOne == 0) {
        console.log(i + " " + "fizz")
      } else if (i % numberTwo == 0) {
        console.log(i + " " + "Buzz")
      }
    }
  }
  ngOnInit(): void {
    // this.questionService.getQuestions().subscribe(res=>{
    //   console.log(res);
    // })
    this.fizzbuzz(3, 5);
  }
}
