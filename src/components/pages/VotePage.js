import React from 'react';
import {VoterInput} from "../voter-tool/VoterInput";
import {ElectionList} from "../voter-tool/ElectionList";

export const VotePage = ({
    elections,
    onSubmitElection: submitElection
}) => {

    return (
        <>
            <header>
                <h2>Vote</h2>
            </header>

            <section>
                <p>Welcome Vote!</p>
            </section>

            <section>
                <ElectionList elections={elections} />
            </section>

            <section>
                <VoterInput buttonText="Submit" elections={elections} onSubmitElection={submitElection} />
            </section>
        </>
    );

};