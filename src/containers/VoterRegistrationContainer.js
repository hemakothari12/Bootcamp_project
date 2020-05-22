import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { refreshVoters, navigate } from '../actions/VoterRegistrationActions';

import { ViewRegisteredVotersPage } from '../components/pages/ViewRegisteredVotersPage';
import { RegisterAVoterPage } from '../components/pages/RegisterAVoterPage';
import { VoterRegistrationPage } from '../components/pages/VoterRegistrationPage';

export const ViewRegisteredVotersPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const navigation = useSelector(state => state.navigation);
  
    const dispatchProps = bindActionCreators({
      onRefreshVoters: refreshVoters,
      onNavigate: navigate,
    }, useDispatch());
  
  
    return <ViewRegisteredVotersPage {...dispatchProps} voters={voters} navigation={navigation} />;
};

export const RegisterAVoterPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const navigation = useSelector(state => state.navigation);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onNavigate: navigate,
  }, useDispatch());


  return <RegisterAVoterPage {...dispatchProps} voters={voters} navigation={navigation} />;
};

export const VoterRegistrationPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const navigation = useSelector(state => state.navigation);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onNavigate: navigate,
  }, useDispatch());


  return <VoterRegistrationPage {...dispatchProps} voters={voters} navigation={navigation} />;
};