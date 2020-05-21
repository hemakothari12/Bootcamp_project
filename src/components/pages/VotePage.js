import React, { useEffect } from 'react';
import {VoterInput} from "../voter-tool/VoterInput";

export const VotePage = ({
    elections,
    onRefreshElection,
    onVerifyUser: verifyUser
}) => {

    useEffect(() => {

        onRefreshElection();

    }, []);

    return (
        <>
            <header>
                <h2>Vote</h2>
            </header>

            <section>
                <p>Welcome Voter!</p>
            </section>

            <section>
                <VoterInput buttonText="Submit" elections={elections} onVerifyUser={verifyUser} />
            </section>
        </>
    );

};