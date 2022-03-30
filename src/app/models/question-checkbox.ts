import { QuestionBase } from './question';

export class CheckboxQuestion extends QuestionBase<string> {
  override controlType = 'choice';
}