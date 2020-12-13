import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import validate from '../utils/client-validation';
import styled from '@emotion/styled';
import { useLazyQuery } from '@apollo/client';
import { LOG_IN } from '../apollo/Queries';

function Login() {
  const [userLogin, { data, error }] = useLazyQuery(LOG_IN);
  const [credentialsErr, setCredentialsErr] = useState(null);
  const router = useRouter();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
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
    setErrors(validate(values, 'login'));
    if (Object.keys(errors).length === 0) {
      // signin
      userLogin({ variables: values });
    }
  };

  function handleClick() {
    router.push('/signup');
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) return router.push('/');
  }, []);

  useEffect(() => {
    if (data) {
      const { login } = data;
      localStorage.setItem('token', login.token);
      localStorage.setItem('user', login.user);
      return router.push('/');
    }
    if (error) {
      setCredentialsErr('Wrong Credentails!');
    }
  }, [data, error]);
  return (
    <StyledContainer>
      <div className="signup">
        <h2 className="signup__title">Log in</h2>
        {credentialsErr && <p className="error">{credentialsErr}</p>}
        <form
          className="forms"
          action="submit"
          onSubmit={handleSubmit}
          noValidate
        >
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
          <div className="form__buttons">
            <button type="submit">Log in</button>
            <button onClick={handleClick}>Sign up</button>
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

export default Login;
