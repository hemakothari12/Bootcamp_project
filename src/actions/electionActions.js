
export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE';

export const createRefreshElectionRequestRequestAction = () => ({ type: REFRESH_ELECTION_REQUEST_ACTION });
export const createRefreshElectionDoneRequestAction = elections => ({ type: REFRESH_ELECTION_DONE_ACTION, elections });

export const refreshElection = () => {

    return dispatch => {

      dispatch(createRefreshElectionRequestRequestAction);
      return fetch('http://localhost:3060/elections')
          .then(res => res.json())
          .then(elections => dispatch(createRefreshElectionDoneRequestAction(elections)));
    };

}