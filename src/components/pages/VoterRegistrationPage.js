import React from 'react';

//import { RegisterAVoterPage } from './RegisterAVoterPage';
//import { ViewRegisteredVotersPage } from './ViewRegisteredVotersPage';

const goRegisterAVoter = () => {
    console.log('Let\'s register a voter!');
};

const goViewRegistrations = () => {
    console.log('Let\'s view the voter registry!');
};

export const VoterRegistrationPage = () => {

    return (
        <>
          <header>
            <h2>Voter Registration Hub</h2>
          </header>
    
          <section>
            <p>Welcome to the Voter Registration Hub! Below, you can find functions for managing the voter registry.</p>
            <div>
                <button type="button" onClick={goRegisterAVoter}>Register Voter</button>
                <button otype="button" onClick={goViewRegistrations}>View Registered Voters</button>
            </div>
          </section>
        </>
      );


};