import React, { useEffect } from 'react';
import {VoterInput} from "../voter-tool/VoterInput";
import {QuestionList} from "../voter-tool/QuestionList";

export const VotePage = ({
    elections,
    electionId,
    onRefreshElection,
    onVerifyUser: verifyUser
}) => {

    useEffect(() => {

        onRefreshElection();

    }, []);

    console.log(elections);

    return (
        <>
            <header>
                <h2>Vote</h2>
            </header>

            <section>
                <p>Welcome Voter!</p>
            </section>

            { electionId !== -1
                ? <QuestionList questions={elections.find(e => e.id === electionId).questions} />
                : <VoterInput buttonText="Submit" elections={elections} onVerifyUser={verifyUser} />}
        </>
    );

};