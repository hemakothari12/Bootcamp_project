import { combineReducers } from "redux";
import { NAVIGATE, REFRESH_VOTERS } from '../actions/VoterRegistrationActions';

/*const voters = [
    {
        "id": "1",
        "email": "hema_kothari@intuit.com",
        "firstname": "Hema",
        "lastname": "Kothari",
        "address": "2600 Marine Way",
        "county_city": "MV",
        "birthdate": "01/01/2020",
        "phone": "6509446000"
    },
    {
        "id": "2",
        "email": "Divya_Kommineni@intuit.com",
        "firstname": "Divya",
        "lastname": "Kommineni",
        "address": "7555 Torrey Santa Fe Rd",
        "county_city": "San Diego",
        "birthdate": "02/01/2020",
        "phone": "8582150000"
    },
    {
        "id": "3",
        "email": "phillip_hill@intuit.com",
        "firstname": "Phillip",
        "lastname": "Hill",
        "address": "7555 Torrey Santa Fe Rd",
        "county_city": "San Diego",
        "birthdate": "03/01/2020",
        "phone": "8582150000"
    }
];*/

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