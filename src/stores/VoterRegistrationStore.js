import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { voterRegistrationReducer } from '../reducers/VoterRegistrationReducers';

export const voterRegistrationStore = createStore(
  voterRegistrationReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);