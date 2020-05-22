import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { createSetHasVoteCastedAction} from '../../actions/electionActions';
import {MainMenu} from "../blocks/MainMenu";

export const MainMenuContainer = () => {

    const hasVoteCasted = useSelector(state => state.hasVoteCasted);

    const dispatchProps = bindActionCreators({
        onSetHasVotedOnLoad: createSetHasVoteCastedAction
    }, useDispatch());

    console.log(hasVoteCasted);

    return <MainMenu {...dispatchProps} />
};