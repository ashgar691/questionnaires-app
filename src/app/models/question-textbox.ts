import { QuestionBase } from './question';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'text';
}