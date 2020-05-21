import {
  REFRESH_BALLOT_DONE_ACTION,
} from '../actions/voteActions';

export const ballotReducer = (ballots = [], action) => {

  if (action.type === REFRESH_BALLOT_DONE_ACTION) {
    return action.ballots;
  }

  return ballots;

};
