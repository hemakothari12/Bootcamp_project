import {
  REFRESH_ELECTION_DONE_ACTION, VOTE_ELECTION_ACTION,
  SET_VOTER_EMAIL_ACTION, CAST_VOTE_ACTION,
  SET_HAS_VOTE_CASTED_ACTION,
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

  if (action.type === CAST_VOTE_ACTION) {
    return -1;
  }

  return editElectionId;

};

export const voterEmailReducer = (voterEmail = '', action) => {

  if (action.type === SET_VOTER_EMAIL_ACTION) {
    return action.voterEmail;
  }

  if (action.type === CAST_VOTE_ACTION) {
    return '';
  }

  return voterEmail;

}

export const hasVoteCastedReducer = (hasVoteCasted = false, action) => {
  if (action.type === CAST_VOTE_ACTION) {
    return true;
  }

  if (action.type === SET_HAS_VOTE_CASTED_ACTION || action.type === REFRESH_ELECTION_DONE_ACTION) {
    return false;
  }

  return hasVoteCasted;
}

export const electionReducer = combineReducers({
  editElectionId: editElectionIdReducer,
  elections: electionsReducer,
  editVoterEmail: voterEmailReducer,
  hasVoteCasted: hasVoteCastedReducer,
});
