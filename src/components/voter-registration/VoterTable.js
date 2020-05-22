import React from 'react';

import styles from '../pages/VoterRegistration.module.css'; 

import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = ({ voters, editVoterId, onEditVoter: editVoter,
  onDeleteVoter: deleteVoter, onSaveVoter: saveVoter, onCancelVoter: cancelVoter, }) => {
    
  return (
    <table className={styles.voterTable}>
      <thead>
        <tr>
          <th>Select</th>
          <th>Id</th>
          <th>Email</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Address</th>
          <th>County/City</th>
          <th>Birthdate</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {voters.map(voter => editVoterId === voter.id
          ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
          : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
      </tbody>
    </table>
  );

};