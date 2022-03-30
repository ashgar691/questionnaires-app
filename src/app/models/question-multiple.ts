import { QuestionBase } from './question';

export class MultipleQuestion extends QuestionBase<string> {
  override controlType = 'multiple';
}