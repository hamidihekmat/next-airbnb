export default function validate(values, type = 'signup') {
  let errors = {};

  // logic for empty string
  if (type === 'signup') {
    if (!values.firstName) {
      errors.firstName = 'first name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'last name is required';
    }
    if (!values.email) {
      errors.email = 'email is required';
    }
    if (!values.password) {
      errors.password = 'password is required';
    }
    if (!values.password2) {
      errors.password2 = 'confirm password is required';
    }
    if (values.password && values.password2) {
      if (values.password !== values.password2) {
        errors.password = 'Password must match';
        errors.password2 = 'Password must match';
      }
    }
  } else {
    if (!values.email) {
      errors.email = 'email is required';
    }
    if (!values.password) {
      errors.password = 'password is required';
    }
  }

  return errors;
}
