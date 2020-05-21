import React from 'react';
import {VotePage} from "../pages/VotePage";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { verifyUser } from '../../actions/voteActions';


export const VotePageContainer = () => {

    const ballots = useSelector(state => state);

    const dispatchProps = bindActionCreators({
        onVerifyUser: verifyUser,
    }, useDispatch());

    return <VotePage ballots={ballots} {...dispatchProps} />;
};