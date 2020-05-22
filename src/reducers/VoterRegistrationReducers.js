import { combineReducers } from "redux";

import { NAVIGATE, REFRESH_VOTERS, EDIT_VOTER, CANCEL_VOTER, SAVE_VOTER
} from '../actions/VoterRegistrationActions';

const voterReducer = (voters = [], action) => {
    if(action.type === REFRESH_VOTERS) {
        return action.voters;
    }
    return voters
};

const navigationReducer = (navigation = '/registration', action) => {
    if(action.type === NAVIGATE) {
        console.log(action.navigation);
        return action.navigation;
    }
    return navigation;
};

const editVoterIdReducer = (editVoterId = -1, action) => {
    if(action.type === EDIT_VOTER) {
        console.log(action.editVoterId);
        return action.editVoterId;
    }

    if(action.type === CANCEL_VOTER || action.type === SAVE_VOTER) {
        editVoterId = -1
        return editVoterId;
    }

    return editVoterId;
};

export const voterRegistrationReducer = combineReducers({
    voters: voterReducer,
    navigation: navigationReducer,
    editVoterId: editVoterIdReducer,
});