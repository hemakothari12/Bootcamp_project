import React from 'react';

import { ViewRegisteredVotersPageContainer, RegisterAVoterPageContainer } from '../../containers/VoterRegistrationContainer';


export const VoterRegistrationPage = ({voters, navigation, onRefreshVoters,
    onNavigate, onAddVoter, onSaveVoter, onDeleteVoter, onEditVoter, onCancelVoter, }) => {

    const main_page_nav = '/registration';
    const register_nav = '/register';
    const voters_nav = '/voters';
    const functions = {onRefreshVoters, onNavigate, onAddVoter, onSaveVoter,
        onDeleteVoter, onEditVoter, onCancelVoter,};

    const goRegisterAVoter = () => {
        console.log('Let\'s register a voter!');
        onNavigate(register_nav);
    };

    const goViewRegistrations = () => {
        console.log('Let\'s view the voter registry!');
        onNavigate(voters_nav);
    };
    
    if(navigation === main_page_nav) {
        return (
            <>
              <header>
                <h2>Voter Registration Hub</h2>
              </header>

              <section>
                <p>Welcome to the Voter Registration Hub! Below, you can find functions for managing the voter registry.</p>
                <div>
                    <button type="button" onClick={goRegisterAVoter}>Register Voter</button>
                    <button type="button" onClick={goViewRegistrations}>View Registered Voters</button>
                </div>
              </section>
            </>
        );
    } else if (navigation === register_nav) {
        return <RegisterAVoterPageContainer {...functions} voters={voters} navigation={navigation}/>;
    } else if (navigation === voters_nav) {
        return <ViewRegisteredVotersPageContainer {...functions} voters={voters} navigation={navigation}/>;
    } else {
        return (
            <header>
                <h2>Opps!! Not a valid route.</h2>
            </header>
        );
    }
};
