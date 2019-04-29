import { decorate, observable, action } from 'mobx';

class Field {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  rules: string;
  required: boolean;
  value: any;
  errors: any;

  constructor(field: {
    name: string,
    label?: string,
    placeholder: string,
    required: boolean,
    type?: string,
    value?: string | number | boolean,
    errors?: string,
    rules: string,
  }) {
    Object.assign(this, field);
  }

  setValue(val: any) {
    this.value = val;
  }

  setErrors(errors: string) {
    this.errors = errors;
  }
}

decorate(Field, {
  value: observable,
  errors: observable,
  setValue: action,
  setErrors: action,
});

export default Field;