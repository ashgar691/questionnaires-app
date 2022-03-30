import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../models/question';


@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {

      if (question.type === "choice") {
        const groupOfCheckbox: any = {};

        for (let i = 0; i < question.options.length; i++) {
          const element = question.options[i];
          groupOfCheckbox[element.key] = question.required ? new FormControl(element.value || false, Validators.required) : new FormControl(element.value || false)
        }
        group[question.key] = new FormGroup(groupOfCheckbox);

      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
      }
    });

    return new FormGroup(group);
  }

  
}