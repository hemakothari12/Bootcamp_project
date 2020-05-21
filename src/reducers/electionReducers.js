import {
  REFRESH_ELECTION_DONE_ACTION, REFRESH_ELECTION_REQUEST_ACTION,
    VOTE_ELECTION_ACTION, VERIFY_USER_VOTED_REQUEST_ACTION,
    VERIFY_USER_REQUEST_ACTION, FETCH_QUESTIONS_ACTION
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

  if ([ REFRESH_ELECTION_DONE_ACTION, VERIFY_USER_REQUEST_ACTION, VERIFY_USER_REQUEST_ACTION,
    REFRESH_ELECTION_REQUEST_ACTION, VERIFY_USER_VOTED_REQUEST_ACTION].includes(action.type)) {
    return -1;
  }

  return editElectionId;

};

export const electionReducer = combineReducers({
  editElectionId: editElectionIdReducer,
  elections: electionsReducer,
});
