import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useMutation } from '@apollo/client';
import { ADD_LISTING } from '../apollo/Mutations';

function AddListing() {
  const router = useRouter();
  const [addListing, { data, error }] = useMutation(ADD_LISTING);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    heading: '',
    selectedFile: '',
    guests: '1',
    beds: '1',
    bedRooms: '1',
    bathRooms: '1',
    kitchen: true,
    parking: true,
    wifi: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/');
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.heading) {
      return setErrors({ heading: 'Heading required!' });
    } else {
      setErrors({});
      // send data
      addListing({
        variables: {
          user: localStorage.getItem('user'),
          heading: values.heading,
          selectedFile: values.selectedFile,
          guests: Math.floor(Math.random() * 9) + 1,
          bed: Math.floor(Math.random() * 9) + 1,
          bedRooms: Math.floor(Math.random() * 9) + 1,
          bathRooms: Math.floor(Math.random() * 9) + 1,
          kitchen: values.kitchen,
          parking: values.parking,
          wifi: values.wifi,
        },
      })
        .then(() => router.push('/listings'))
        .catch((error) => console.log(error));
    }
  };

  return (
    <StyledContainer>
      <div className="signup">
        <h2 className="signup__title">Add Listing</h2>
        <form
          className="forms"
          action="submit"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label htmlFor="heading">
              Listing Title
              <input
                type="heading"
                id="heading"
                name="heading"
                placeholder="Heading"
                onChange={handleChange}
                value={values.heading}
              />
            </label>
          </div>
          {errors.heading && <p className="error">{errors.heading}</p>}
          <div>
            <label htmlFor="guests">
              Number of Guests
              <select
                onChange={handleChange}
                name="guests"
                value={values.guests}
              >
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value="4-6">4-6</option>
                <option value="6+">6+</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="beds">
              Number of Beds
              <select onChange={handleChange} name="beds" value={values.beds}>
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value="4-6">4-6</option>
                <option value="6+">6+</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="bedRooms">
              Number of Bed Rooms
              <select
                onChange={handleChange}
                name="bedRooms"
                value={values.bedRooms}
              >
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value="4-6">4-6</option>
                <option value="6+">6+</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="bathRooms">
              Number of Bath Rooms
              <select
                onChange={handleChange}
                name="bathRooms"
                value={values.bathRooms}
              >
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value="4-6">4-6</option>
                <option value="6+">6+</option>
              </select>
            </label>
          </div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setValues({ ...values, selectedFile: base64 })
            }
          />
          <div className="form__buttons">
            <button type="submit">Submit</button>
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
    max-width: 400px;
    max-height: 550px;
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
  }
  select {
    width: 100%;
    margin: 0.5rem 0rem;
    padding: 0.3rem 0rem;
  }

  select {
    display: block;
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

export default AddListing;
