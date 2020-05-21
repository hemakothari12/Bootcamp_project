import React from 'react';

import { RegistrationForm } from '../voter-registration/RegistrationForm'



export const RegisterAVoterPage = ({onRegister: voter}) => {
    return (
        <>
            <header>
                <h2>Register A Voter</h2>
            </header>

            <section>
                <RegistrationForm buttonText="Add New Voter" onSubmitVoter={voter} />
            </section>
        </>
    );
};