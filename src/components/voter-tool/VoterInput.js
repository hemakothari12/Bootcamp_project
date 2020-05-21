import React from 'react';

import { useForm } from '../../hooks/useForm';

export const VoterInput = ({ buttonText, onSubmitElection, elections }) => {

    const [ electionForm, change, resetElectionForm ] = useForm({
        election_name: '', voter_email: '',
    });

    const submitElection = () => {
        onSubmitElection({ ...electionForm });
        resetElectionForm();
    };

    return (
        <form>
            <div>
                <label htmlFor="election-name-dropdown">Election Name:</label>
                <select name="election_name" onChange={change}>
                    {elections.map(e => <option key={e.id}
                                                value={e.id}
                                                >{e.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="user-email-input">User Email:</label>
                <input type="text" id="user-email-input"
                       name="voter_email" value={electionForm.voter_email} onChange={change} />
            </div>
            <button type="button" onClick={submitElection}>{buttonText}</button>
        </form>
    );

};

VoterInput.defaultProps = {
    buttonText: 'Submit',
};