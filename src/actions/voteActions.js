
export const VERIFY_USER_REQUEST_ACTION = 'VERIFY_USER_REQUEST';
export const REFRESH_BALLOT_DONE_ACTION = 'REFRESH_BALLOT_DONE';
export const REFRESH_BALLOT_REQUEST_ACTION = 'REFRESH_BALLOT_REQUEST';
// export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';

export const createVerifyUserRequestAction = (voteInput) => ({ type: VERIFY_USER_REQUEST_ACTION, voteInput });
export const createRefreshBallotDoneAction = (ballots) => ({ type: REFRESH_BALLOT_DONE_ACTION, ballots });
export const createRefreshBallotRequestAction = ballot => ({ type: REFRESH_BALLOT_REQUEST_ACTION, ballot });
// export const createDeleteColorRequestAction = colorId => ({ type: DELETE_COLOR_REQUEST_ACTION, colorId });

export const refreshBallot = () => {

  return dispatch => {

    dispatch(createRefreshBallotRequestAction());
    return fetch('http://localhost:3060/ballots')
        .then(res => res.json())
        // .then(ballots => dispatch(createRefreshBallotDoneAction(ballots)));
        .then(ballots => console.log(ballots));
  };

}

export const verifyUser = () => {

    return dispatch => {

      dispatch(createRefreshBallotRequestAction());
      return fetch('http://localhost:3060/ballots')
          .then(res => res.json())
          // .then(ballots => dispatch(createRefreshBallotDoneAction(ballots)));
          .then(ballots => console.log(ballots));
    };

}

// export const refreshColors = () => {
//
//   // this is the function dispatched into the action pipeline,
//   // return think will see its a function, invoking it passing
//   // in the store's dispatch method
//   return dispatch => {
//
//     // this is the request action which is dispatched just before
//     // the REST API call is made
//     dispatch(createRefreshColorsRequestAction());
//     return fetch('http://localhost:3060/colors')
//       .then(res => res.json())
//       // this is the done action which is dispatched when the response
//       // is received from the REST API
//       .then(colors => dispatch(createRefreshColorsDoneAction(colors)));
//
//   };
//
// };
//
// export const addColor = color => {
//
//   return dispatch => {
//
//     dispatch(createAddColorRequestAction(color));
//     return fetch('http://localhost:3060/colors', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(color),
//     })
//       .then(() => dispatch(refreshColors()));
//
//   };
//
// };
//
// export const deleteColor = colorId => {
//
//   return dispatch => {
//
//     dispatch(createDeleteColorRequestAction(colorId));
//     return fetch('http://localhost:3060/colors/' + encodeURIComponent(colorId), {
//       method: 'DELETE',
//     })
//       .then(() => dispatch(refreshColors()));
//
//   };
//
// };