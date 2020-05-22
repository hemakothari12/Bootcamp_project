import React from 'react';

import { RegistrationForm } from '../voter-registration/RegistrationForm'



export const RegisterAVoterPage = ({voters, navigation, onRefreshVoters,
    onNavigate, onAddVoter, onSaveVoter, onDeleteVoter, onEditVoter, onCancelVoter, }) => {
    return (
        <>
            <header>
                <h2>Register A Voter</h2>
            </header>

            <section>
                <RegistrationForm buttonText="Add New Voter" onSubmitVoter={onAddVoter} onNavigate={onNavigate} />
            </section>
        </>
    );
};