import React from 'react';

import { useForm } from '../../hooks/useForm';

export const VoterEditRow = ({ voter, onSaveVoter, onCancelVoter: cancelVoter }) => {

  const [ voterForm, change ] = useForm({
    ...voter
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };

  return (
    <tr>
      <td><input type="checkbox" id={voter.id} name={voter.email} disabled/></td>
      <td>{voter.id}</td>
      <td>{voter.email}</td>
      <td>
        <input type="text" id="firstname-input" name="firstname"
               value={voterForm.firstname} onChange={change} />
      </td>
      <td>
        <input type="text" id="lastname-input" name="lastname"
               value={voterForm.lastname} onChange={change} />
      </td>
      <td>
        <input type="text" id="address-input" name="address"
               value={voterForm.address} onChange={change} />
      </td>
      <td>
        <input type="text" id="county_city-input" name="county_city"
               value={voterForm.county_city} onChange={change} />
      </td>
      <td>
        <input type="text" id="birthdate-input" name="birthdate"
               value={voterForm.birthdate} onChange={change} />
      </td>
      <td>
        <input type="number" id="phone-input" name="phone"
               value={voterForm.phone} onChange={change} />
      </td>
      <td>
        <button type="button" onClick={saveVoter}>
          Save
        </button>
        <button type="button" onClick={cancelVoter}>
          Cancel
        </button>
      </td>
    </tr>
  );


};