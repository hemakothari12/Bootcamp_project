import React from 'react';

import { VoterTable } from "../voter-registration/VoterTable"

export const ViewRegisteredVotersPage = ({voters, navigation, editVoterId,
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: editVoter,
    onCancelVoter: cancelVoter,}) => {

    console.log(voters);

    return (
        <>
            <header>
                <h2>Voter Registry</h2>
            </header>

            <section>
            <VoterTable voters={voters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter}
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
            </section>
        </>
    );

};