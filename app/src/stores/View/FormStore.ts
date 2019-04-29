import { Field } from 'models';

class FormStore {
  forms: Map<string, Array<Field>>;

  constructor() {
    this.forms = new Map();
  }

  public addForm = (form: string, fields: Array<Field>) => {
    this.forms.set(form, fields);
  }

  public checkForm = (form: string) => {
    return this.forms.has(form);
  }

  public getForm = (form: string) => {
    return this.forms.get(form);
  }
}

export default FormStore;