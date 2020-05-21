import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ballotReducer } from '../reducers/ballotReducers';

export const ballotStore = createStore(
  ballotReducer,
  // places thunk middleware into the pipeline
  // think will looks for actions which are functions
  composeWithDevTools(applyMiddleware(thunk)),
);