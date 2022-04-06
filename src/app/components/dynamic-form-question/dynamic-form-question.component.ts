import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  @Output() displayQuestion = new EventEmitter<string>();

  get isValid() { return this.form.controls[this.question.key].valid; };

  displayFunc(question: QuestionBase<string>, value: string) {
    const asher = JSON.stringify({ "question": question, "val": value });
    this.displayQuestion.emit(asher);
  }

}