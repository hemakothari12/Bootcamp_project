import React, { useEffect } from 'react';
import {VotePage} from "../pages/VotePage";
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { verifyUser, refreshElection, castVote, createSetHasVoteCastedAction} from '../../actions/electionActions';
import {SuccessScreen} from "../voter-tool/SucessScreen";

export const VotePageContainer = () => {

    const elections = useSelector(state => state.elections);
    const electionId = useSelector(state => state.editElectionId);
    const voterEmail = useSelector(state => state.editVoterEmail);
    const hasVoteCasted = useSelector(state => state.hasVoteCasted);

    const dispatchProps = bindActionCreators({
        onVerifyUser: verifyUser,
        onRefreshElection: refreshElection,
        onCastVote: castVote,
        onSetHasVotedOnLoad: createSetHasVoteCastedAction
    }, useDispatch());

    return hasVoteCasted === false
        ? <VotePage {...dispatchProps} elections={elections} electionId={electionId}
                     voterEmail={voterEmail} />
        : <SuccessScreen {...dispatchProps} />
};