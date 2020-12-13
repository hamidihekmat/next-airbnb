import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import validate from '../utils/client-validation';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../apollo/Mutations';

function SignUp() {
  const router = useRouter();
  const [addUser, { data, error }] = useMutation(ADD_USER);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return router.push('/');
    }
  }, []);

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valueErrors = validate(values);
    setErrors({ errors, ...valueErrors });
    if (Object.keys(valueErrors).length === 0) {
      addUser({ variables: values })
        .then(() => router.push('/'))
        .catch((error) => console.log(error));
    }
  };
  if (error) return <div>Error occured</div>;
  function handleClick() {
    router.push('/login');
  }
  return (
    <StyledContainer>
      <div className="signup">
        <h2 className="signup__title">Create Account</h2>
        <form
          className="forms"
          action="submit"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label htmlFor="firstName">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={values.firstName}
              />
            </label>
          </div>
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          <div>
            <label htmlFor="lastName">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
              />
            </label>
          </div>
          {errors.lastName && <p className="error">{errors.lastName}</p>}
          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
            </label>
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <div>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
            </label>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div>
            <label htmlFor="password2">
              <input
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={values.password2}
              />
            </label>
          </div>
          {errors.password2 && <p className="error">{errors.password2}</p>}
          <div className="form__buttons">
            <button type="submit">Sign up</button>
            <button onClick={handleClick}>Sign In</button>
          </div>
        </form>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;

  .signup {
    margin: 10px;
    background-color: white;
    max-width: 375px;
    max-height: 500px;
    background-color: white;
    position: relative;
    border-radius: 25px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  input {
    margin: 5px;
    padding: 10px;
    min-width: 250px;
    outline: none;
    border: 1px solid #c5ccda;
    border-radius: 15px;
  }

  .signup__title {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .form__buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .error {
    color: tomato;
    font-size: 14px;
    margin-left: 10px;
  }

  .success {
    color: #000c40;
    font-size: 14px;
    z-index: 1;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: tomato;
    color: white;
    border-radius: 10px;
  }
`;

export default SignUp;
