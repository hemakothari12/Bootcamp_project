import React from 'react';
import {VotePage} from "../pages/VotePage";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { verifyUser } from '../../actions/ballotsActions';
import { refreshElection } from '../../actions/electionActions'

export const VotePageContainer = () => {

    const elections = useSelector(state => state);

    const dispatchProps = bindActionCreators({
        onVerifyUser: verifyUser,
        onRefreshElection: refreshElection
    }, useDispatch());

    return <VotePage {...dispatchProps} elections={elections} />;
};