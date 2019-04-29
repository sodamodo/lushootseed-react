import Field from './Field';
import Validator from 'validatorjs';

class Form {
  submit: Function;
  fields: Map<string, Field>;

  constructor( formTemplate: Array<Field>, formData: any, submit: Function) {
    this.submit = submit;
    this.fields = new Map();
    formTemplate.forEach((field: Field) => {
      this.fields.set(field.name, field);
    });
  }
}

export default Form;