import React from 'react';

import { useForm } from '../../hooks/useForm'
 
export const RegistrationForm = ({ buttonText, onSubmitVoter }) => {

  const [ registrationForm, change, resetRegistrationForm ] = useForm({
    email: '', firstname: '', lastname: '', address: '', county_city: '', birthdate: '', phone: '',
  });

  const submitVoter = () => {
    onSubmitVoter({ ...registrationForm });
    resetRegistrationForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input type="text" id="email-input"
          name="email" value={registrationForm.email} onChange={change} />
      </div>
      <div>
        <label htmlFor="firstname-input">Firstname:</label>
        <input type="text" id="firstname-input"
          name="firstname" value={registrationForm.firstname} onChange={change} />
      </div>
      <div>
        <label htmlFor="lastname-input">Lastname:</label>
        <input type="number" id="lastname-input"
          name="lastname" value={registrationForm.lastname} onChange={change} />
      </div>
      <div>
        <label htmlFor="address-input">Address:</label>
        <input type="text" id="address-input"
          name="address" value={registrationForm.address} onChange={change} />
      </div>
      <div>
        <label htmlFor="county_city-input">County/City:</label>
        <input type="number" id="county_city-input"
          name="county_city" value={registrationForm.county_city} onChange={change} />
      </div>
      <div>
        <label htmlFor="birthdate-input">Birthdate:</label>
        <input type="number" id="birthdate-input"
          name="birthdate" value={registrationForm.birthdate} onChange={change} />
      </div>
      <div>
        <label htmlFor="phone-input">Phone:</label>
        <input type="number" id="phone-input"
          name="phone" value={registrationForm.phone} onChange={change} />
      </div>
      <button type="button" onClick={submitVoter}>{buttonText}</button>
    </form>
  );

};

RegistrationForm.defaultProps = {
  buttonText: 'Add New Voter',
};