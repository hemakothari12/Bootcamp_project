import React from 'react';

import styles from '../pages/VoterRegistration.module.css'; 

import { useForm } from '../../hooks/useForm'
 
export const RegistrationForm = ({ buttonText, onSubmitVoter, onNavigate }) => {

  const main_page_nav = '/registration';

  const [ registrationForm, change, resetRegistrationForm ] = useForm({
    email: '', firstname: '', lastname: '', address: '', county_city: '', birthdate: '', phone: '',
  });

  const submitVoter = () => {
    onSubmitVoter({ ...registrationForm });
    resetRegistrationForm();
    onNavigate(main_page_nav);
  };

  const goMainPage = () => {
    console.log('Let\'s return to the main page!');
    onNavigate(main_page_nav);
  };

  return (
    <form className={styles.voterRegistration}>
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
        <input type="text" id="lastname-input"
          name="lastname" value={registrationForm.lastname} onChange={change} />
      </div>
      <div>
        <label htmlFor="address-input">Address:</label>
        <input type="text" id="address-input"
          name="address" value={registrationForm.address} onChange={change} />
      </div>
      <div>
        <label htmlFor="county_city-input">County/City:</label>
        <input type="text" id="county_city-input"
          name="county_city" value={registrationForm.county_city} onChange={change} />
      </div>
      <div>
        <label htmlFor="birthdate-input">Birthdate:</label>
        <input type="text" id="birthdate-input"
          name="birthdate" value={registrationForm.birthdate} onChange={change} />
      </div>
      <div>
        <label htmlFor="phone-input">Phone:</label>
        <input type="number" id="phone-input"
          name="phone" value={registrationForm.phone} onChange={change} />
      </div>
      <button type="button" onClick={submitVoter}>{buttonText}</button>
      <button type="button" onClick={goMainPage}>Cancel/Main Menu</button>
    </form>
  );

};

RegistrationForm.defaultProps = {
  buttonText: 'Add New Voter',
};