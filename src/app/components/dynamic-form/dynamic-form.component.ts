import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase  } from 'src/app/models/question';
import { QuestionControlService } from 'src/app/services/question-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})


export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];

  form!: FormGroup;

  payLoad = '';

  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    console.log(JSON.stringify(this.form.getRawValue()));
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}