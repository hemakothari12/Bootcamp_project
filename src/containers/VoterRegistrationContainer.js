import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { refreshVoters, navigate, addVoter, saveVoter, 
  deleteVoter, editVoter, cancelVoter } from '../actions/VoterRegistrationActions';

import { ViewRegisteredVotersPage } from '../components/pages/ViewRegisteredVotersPage';
import { RegisterAVoterPage } from '../components/pages/RegisterAVoterPage';
import { VoterRegistrationPage } from '../components/pages/VoterRegistrationPage';

export const ViewRegisteredVotersPageContainer = () => {

    const voters = useSelector(state => state.voters);
    const navigation = useSelector(state => state.navigation);
    const editVoterId = useSelector(state => state.editVoterId);

    const dispatchProps = bindActionCreators({
      onRefreshVoters: refreshVoters,
      onNavigate: navigate,
      onAddVoter: addVoter,
      onSaveVoter: saveVoter,
      onDeleteVoter: deleteVoter,
      onEditVoter: editVoter,
      onCancelVoter: cancelVoter,
    }, useDispatch());

    return <ViewRegisteredVotersPage {...dispatchProps} voters={voters} navigation={navigation} editVoterId={editVoterId} />;
};

export const RegisterAVoterPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const navigation = useSelector(state => state.navigation);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onNavigate: navigate,
    onAddVoter: addVoter,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: editVoter,
    onCancelVoter: cancelVoter,
  }, useDispatch());

  return <RegisterAVoterPage {...dispatchProps} voters={voters} navigation={navigation} editVoterId={editVoterId} />;
};

export const VoterRegistrationPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const navigation = useSelector(state => state.navigation);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onNavigate: navigate,
    onAddVoter: addVoter,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: editVoter,
    onCancelVoter: cancelVoter,
  }, useDispatch());

  return <VoterRegistrationPage {...dispatchProps} voters={voters} navigation={navigation} editVoterId={editVoterId}/>;
};