export const REFRESH_VOTERS = 'REFRESH_VOTERS';
export const ADD_VOTER = 'ADD_VOTER';
export const EDIT_VOTER = 'EDIT_VOTER';
export const SAVE_VOTER = 'SAVE_VOTER';
export const DELETE_VOTERS = 'DELETE_VOTERS';
export const CANCEL_VOTER = 'CANCEL_VOTER';
export const NAVIGATE = 'NAVIGATE';

export const createRefreshVotersAction = voters => ({ type: REFRESH_VOTERS, voters });
export const createAddVoterAction = voter => ({ type: ADD_VOTER, voter });
export const createEditVoterAction = editVoterId => ({ type: EDIT_VOTER, editVoterId });
export const createSaveVoterAction = () => ({ type: SAVE_VOTER });
export const createDeleteVotersAction = voterId => ({ type: DELETE_VOTERS, voterId });
export const createCancelAction = () => ({ type: CANCEL_VOTER });
export const createNavigateAction = navigation => ({ type: NAVIGATE, navigation });

const voter_resource = 'http://localhost:3060/voters';

export const refreshVoters = () => {
    return dispatch => {
        return fetch(voter_resource)
        .then(res => res.json())
        .then(voters => dispatch(createRefreshVotersAction(voters)));
    }
};

export const navigate = navigation => {
    console.log(navigation);
    return dispatch => {
        return fetch(voter_resource)
        .then(res => res.json())
        .then(voters => dispatch(createRefreshVotersAction(voters)))
        .then(() => dispatch(createNavigateAction(navigation)));
    };
};

export const addVoter = voter => {
    return dispatch => {
        return fetch(voter_resource, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voter),
        }).then(() => dispatch(refreshVoters()));
    };
};

export const editVoter = voterId => {
    console.log(voterId);
    return dispatch => {
        dispatch(createEditVoterAction(voterId));
    };
};

export const cancelVoter = () => {
    return dispatch => {
        dispatch(createCancelAction());
    };
};

export const saveVoter = voter => {
    return dispatch => {
        return fetch(voter_resource + '/' + encodeURIComponent(voter.id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voter),
        })
        .then(() => dispatch(createSaveVoterAction()))
        .then(() => dispatch(refreshVoters()));
    };
};

export const deleteVoter = voterId => {
    return dispatch => {
        return fetch(voter_resource + '/' + encodeURIComponent(voterId), {
            method: 'DELETE',
        })
        .then(() => dispatch(refreshVoters()));
    };
};



