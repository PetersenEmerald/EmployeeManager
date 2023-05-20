import { Field } from './field.model';

export class ShortText extends Field<string> {
  fieldType = 'input';
  type: string = 'text';
  maxlength?: number = 100;

  constructor(data?: Partial<ShortText>) {
    super(data);

    this.type = data?.type;
    this.maxlength = data?.maxlength;
  }
}