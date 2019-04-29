const loginFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Email Address',
    rules: 'email|string|required'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    rules: 'string|required',
    placeholder: 'Enter Password',
  }
];

const createAccounttFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Email Address',
    rules: 'email|string|required'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    rules: 'string|required',
    placeholder: 'Enter Password',
  },
  {
    name: 'passwordAgain',
    label: 'Password Again',
    type: 'password',
    placeholder: 'Enter Password Again',
    rules: 'string|required|same:password'
  }
];

const forgotFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Email Address',
    rules: 'email|string|required'
  }
];

export default {
  loginFields,
  createAccounttFields,
  forgotFields,
}