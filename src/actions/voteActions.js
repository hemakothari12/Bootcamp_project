
export const VERIFY_USER_REQUEST_ACTION = 'VERIFY_USER_REQUEST';
export const VERIFY_USER_VOTED_REQUEST_ACTION = 'VERIFY_USER_VOTED_REQUEST';

export const createVerifyUserRequestAction = userDetail => ({ type: VERIFY_USER_REQUEST_ACTION, userDetail });
export const createVerifyUserVotedRequestAction = votingDetails => ({ type: VERIFY_USER_VOTED_REQUEST_ACTION, votingDetails });

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
        return fetch('http://localhost:3060/ballots?election_name=' + (votingDetails.election_name) +'&voter_email=' + (votingDetails.voter_email) )
            .then(res => res.json())
            .then(ballots => {
                if(ballots.length >= 1) {
                    alert('You have already voted in this election');
                } else {
                    alert('You are eleigible to vote');
                }
            });
    };


}