import { combineReducers } from "redux";

import { NAVIGATE, REFRESH_VOTERS, ADD_VOTER, 
    EDIT_VOTER, DELETE_VOTERS, CANCEL_VOTER 
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

export const voterRegistrationReducer = combineReducers({
    voters: voterReducer,
    navigation: navigationReducer,
});