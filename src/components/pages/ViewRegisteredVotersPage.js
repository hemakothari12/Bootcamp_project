import React from 'react';

import styles from '../pages/VoterRegistration.module.css'; 

import { VoterTable } from "../voter-registration/VoterTable"

export const ViewRegisteredVotersPage = ({voters, navigation, editVoterId, onRefreshVoters, 
    onNavigate, onAddVoter, onSaveVoter, onDeleteVoter, onEditVoter, onCancelVoter,}) => {

    const main_page_nav = '/registration';

    const goMainPage = () => {
        console.log('Let\'s return to the main page!');
        onNavigate(main_page_nav);
    };

    return (
        <>
            <header>
                <h2>Voter Registry</h2>
            </header>

            <section className={styles.voterRegistration}>
                <VoterTable voters={voters} editVoterId={editVoterId} onEditVoter={onEditVoter} onDeleteVoter={onDeleteVoter}
                    onSaveVoter={onSaveVoter} onCancelVoter={onCancelVoter} />
                <button type="button" onClick={goMainPage}>Cancel/Main Menu</button>
            </section>
        </>
    );

};