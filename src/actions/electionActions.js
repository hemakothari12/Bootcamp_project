
export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE';
export const VERIFY_USER_REQUEST_ACTION = 'VERIFY_USER_REQUEST';
export const VERIFY_USER_VOTED_REQUEST_ACTION = 'VERIFY_USER_VOTED_REQUEST';
export const VOTE_ELECTION_ACTION = 'VOTE_ELECTION';
export const SET_VOTER_EMAIL_ACTION = 'SET_VOTER_EMAIL';
export const CAST_VOTE_ACTION = 'CAST_VOTE_EMAIL';
export const SET_HAS_VOTE_CASTED_ACTION = 'SET_HAS_VOTE_CASTED';

export const createRefreshElectionRequestRequestAction = () => ({ type: REFRESH_ELECTION_REQUEST_ACTION });
export const createRefreshElectionDoneRequestAction = elections => ({ type: REFRESH_ELECTION_DONE_ACTION, elections });
export const createVerifyUserRequestAction = userDetail => ({ type: VERIFY_USER_REQUEST_ACTION, userDetail });
export const createVerifyUserVotedRequestAction = votingDetails => ({ type: VERIFY_USER_VOTED_REQUEST_ACTION, votingDetails });
export const createVoteElectionAction = electionId => ({ type: VOTE_ELECTION_ACTION, electionId });
export const createSetVoterEmailAction = voterEmail => ({ type: SET_VOTER_EMAIL_ACTION, voterEmail });
export const createCastVoteAction = ballot => ({ type: CAST_VOTE_ACTION, ballot });
export const createSetHasVoteCastedAction = () => ({ type: SET_HAS_VOTE_CASTED_ACTION });

export const refreshElection = () => {

    return dispatch => {

      dispatch(createRefreshElectionRequestRequestAction);
      return fetch('http://localhost:3060/elections')
          .then(res => res.json())
          .then(dispatch(createSetHasVoteCastedAction))
          .then(elections => dispatch(createRefreshElectionDoneRequestAction(elections)));
    };

}

export const verifyUser = userDetail => {
    return dispatch => {

        dispatch(createVerifyUserRequestAction(userDetail));
        return fetch('http://localhost:3060/voters?email=' + (userDetail.voter_email))
            .then(res => res.json())
            .then(voter => {
                if(voter.length === 1 ) {
                    dispatch(verifyUserVoted(userDetail));
                } else {
                    alert('User not found');
                }
            });
    };

}

export const verifyUserVoted = votingDetails => {

    return dispatch => {

        dispatch(createVerifyUserVotedRequestAction(votingDetails));
        return fetch('http://localhost:3060/ballots?election_id=' + (votingDetails.election_id) +'&voter_email=' + (votingDetails.voter_email) )
            .then(res => res.json())
            .then(ballots => {
                if(ballots.length >= 1) {
                    alert('You have already voted in this election');
                } else {
                    dispatch(createVoteElectionAction(votingDetails.election_id));
                    dispatch(createSetVoterEmailAction(votingDetails.voter_email));
                }
            });
    };

}

export const castVote = ballot => {

    return dispatch => {

        dispatch(createCastVoteAction(ballot));
        return fetch('http://localhost:3060/ballots', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ballot),
        })
    };

};


