import React from 'react';
import {VotePage} from "../pages/VotePage";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { verifyUser, refreshElection, castVote} from '../../actions/electionActions';

export const VotePageContainer = () => {

    const elections = useSelector(state => state.elections);
    const electionId = useSelector(state => state.editElectionId);
    const voterEmail = useSelector(state => state.voterEmail);

    const dispatchProps = bindActionCreators({
        onVerifyUser: verifyUser,
        onRefreshElection: refreshElection,
        onCastVote: castVote,
    }, useDispatch());

    return <VotePage {...dispatchProps} elections={elections} electionId={electionId}
                     voterEmail={voterEmail} />;
};