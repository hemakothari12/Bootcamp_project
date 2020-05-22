export const REFRESH_VOTERS = 'REFRESH_VOTERS';
export const ADD_VOTER = 'ADD_VOTER';
export const EDIT_VOTER = 'EDIT_VOTER';
export const DELETE_VOTERS = 'DELETE_VOTERS';
export const CANCEL_VOTER = 'CANCEL_VOTER';
export const NAVIGATE = 'NAVIGATE';

export const createRefreshVotersAction = voters => ({ type: REFRESH_VOTERS, voters });
export const createAddVoterAction = voter => ({ type: ADD_VOTER, voter });
export const createEditVoterAction = voterId => ({ type: EDIT_VOTER, voterId });
export const createDeleteVotersAction = voterIds => ({ type: DELETE_VOTERS, voterIds });
export const createCancelAction = () => ({ type: CANCEL_VOTER });
export const createNavigateAction = navigation => ({ type: NAVIGATE, navigation });

export const refreshVoters = () => {
    return dispatch => {
        //dispatch(createRefreshVotersAction());
        return fetch('http://localhost:3060/voters')
        .then(res => res.json())
        .then(voters => dispatch(createRefreshVotersAction(voters)));
    }
  
  };

  /*export const navigate = navigation => {
    console.log(navigation);  
    return dispatch => {
        dispatch(createNavigateAction(navigation));
    };
  };*/

  export const navigate = navigation => {
    console.log(navigation);  
    return dispatch => {
        return fetch('http://localhost:3060/voters')
        .then(res => res.json())
        .then(voters => dispatch(createRefreshVotersAction(voters)))
        .then(() => dispatch(createNavigateAction(navigation)));
    };
  };