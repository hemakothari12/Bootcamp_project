import {
  REFRESH_ELECTION_DONE_ACTION, VOTE_ELECTION_ACTION, SET_VOTER_EMAIL_ACTION
} from '../actions/electionActions';
import { combineReducers } from "redux";

export const electionsReducer = (elections = [], action) => {

  if (action.type === REFRESH_ELECTION_DONE_ACTION) {
    return action.elections;
  }

  return elections;

};

export const editElectionIdReducer = (editElectionId = -1, action) => {

  if (action.type === VOTE_ELECTION_ACTION) {
    return action.electionId;
  }

  return editElectionId;

};

export const voterEmailReducer = (voterEmail = '', action) => {

  if (action.type === SET_VOTER_EMAIL_ACTION) {
    return action.voterEmail;
  }

  return voterEmail;

}

export const electionReducer = combineReducers({
  editElectionId: editElectionIdReducer,
  elections: electionsReducer,
  editVoterEmail: voterEmailReducer,
});
