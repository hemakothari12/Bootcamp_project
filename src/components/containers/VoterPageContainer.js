import React from 'react';
import {VotePage} from "../pages/VotePage";
// import { bindActionCreators } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//     addColor, deleteColor,
//     refreshColors,
// } from '../../actions/colorActions';

// import { ColorToolPage } from '../pages/ColorToolPage';

export const VotePageContainer = ({ elections }) => {

    const verifyUser = (electionData) => {
        console.log(electionData);
    }

    // const colors = useSelector(state => state);

    // const dispatchProps = bindActionCreators({
    //     onAddColor: addColor,
    //     onDeleteColor: deleteColor,
    //     onRefreshColors: refreshColors,
    // }, useDispatch());

    return <VotePage elections={elections} onSubmitElection={verifyUser} />;
};