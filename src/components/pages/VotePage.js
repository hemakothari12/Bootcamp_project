import React, { useEffect } from 'react';
import {VoterInput} from "../voter-tool/VoterInput";
import {QuestionList} from "../voter-tool/QuestionList";

export const VotePage = ({
    elections,
    electionId,
    voterEmail,
    onRefreshElection,
    onVerifyUser: verifyUser,
    onCastVote: castVote,
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
                ? <QuestionList questions={elections.find(e => e.id === electionId).questions}
                                electionId={electionId}
                                voterEmail={voterEmail}
                                buttonText="Cast Vote" onCastVote={castVote}/>
                : <VoterInput buttonText="Submit" elections={elections} onVerifyUser={verifyUser} />}
        </>
    );

};