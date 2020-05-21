import React from 'react';

import { VoterTable } from "../voter-registration/VoterTable"

export const ViewRegisteredVotersPage = ({voters, editVoterId,
    onRefreshVoter: refreshVoter,
    onAddVoter: addVoter,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: editVoter,
    onCancelVoter: cancelVoter,}) => {

    voters = [
        {
            "id": "1",
            "email": "hema_kothari@intuit.com",
            "firstname": "Hema",
            "lastname": "Kothari",
            "address": "2600 Marine Way",
            "county_city": "MV",
            "birthdate": "01/01/2020",
            "phone": "6509446000"
        },
        {
            "id": "2",
            "email": "Divya_Kommineni@intuit.com",
            "firstname": "Divya",
            "lastname": "Kommineni",
            "address": "7555 Torrey Santa Fe Rd",
            "county_city": "San Diego",
            "birthdate": "02/01/2020",
            "phone": "8582150000"
        },
        {
            "id": "3",
            "email": "phillip_hill@intuit.com",
            "firstname": "Phillip",
            "lastname": "Hill",
            "address": "7555 Torrey Santa Fe Rd",
            "county_city": "San Diego",
            "birthdate": "03/01/2020",
            "phone": "8582150000"
        }
        ];

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