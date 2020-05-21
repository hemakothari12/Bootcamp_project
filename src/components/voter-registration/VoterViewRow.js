import React from 'react';

export const VoterViewRow = ({ voter, onEditVoter: editVoter, onDeleteVoter: deleteVoter }) => {

  return (
    <tr>
      <td><input type="checkbox" id={voter.id} name={voter.email}/></td>
      <td>{voter.id}</td>
      <td>{voter.email}</td>
      <td>{voter.firstname}</td>
      <td>{voter.lastname}</td>
      <td>{voter.address}</td>
      <td>{voter.county_city}</td>
      <td>{voter.birthdate}</td>
      <td>{voter.phone}</td>
      <td>
        <button type="button" onClick={() => editVoter(voter.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteVoter(voter.id)}>
          Delete
        </button>
      </td>
    </tr>
  );


};