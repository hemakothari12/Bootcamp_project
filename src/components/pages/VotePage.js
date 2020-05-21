import React, { useEffect } from 'react';
import {VoterInput} from "../voter-tool/VoterInput";
import {ElectionList} from "../voter-tool/ElectionList";

export const VotePage = ({
    elections,
    electionId,
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

            { electionId != -1
                ? <ElectionList elections={elections} />
                : <VoterInput buttonText="Submit" elections={elections} onVerifyUser={verifyUser} />}
        </>
    );

};