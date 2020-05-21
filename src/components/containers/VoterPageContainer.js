import React from 'react';
import {VotePage} from "../pages/VotePage";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { verifyUser, refreshElection } from '../../actions/electionActions';

export const VotePageContainer = () => {

    const elections = useSelector(state => state.elections);
    const electionId = useSelector(state => state.editElectionId);

    const dispatchProps = bindActionCreators({
        onVerifyUser: verifyUser,
        onRefreshElection: refreshElection
    }, useDispatch());

    return <VotePage {...dispatchProps} elections={elections} electionId={electionId} />;
};