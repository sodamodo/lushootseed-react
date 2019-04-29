import React from 'react';
import Field from './components/field'

class Form extends React.Component {
  render() {
    return (
      <div className={'form-container'}>
        {this.props.form.fields.map((field) => {
          return (
            <Field {...field} />
          )
        })}
      </div>
    )
  }
}

export default Form;