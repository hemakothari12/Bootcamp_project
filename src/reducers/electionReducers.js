import {
  REFRESH_ELECTION_DONE_ACTION,
} from '../actions/electionActions';

export const electionReducer = (elections = [], action) => {

  if (action.type === REFRESH_ELECTION_DONE_ACTION) {
    return action.elections;
  }

  return elections;

};
