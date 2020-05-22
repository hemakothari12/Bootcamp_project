import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { electionReducer } from '../reducers/electionReducers';

export const electionStore = createStore(
  electionReducer,
  // places thunk middleware into the pipeline
  // think will looks for actions which are functions
  composeWithDevTools(applyMiddleware(thunk)),
);