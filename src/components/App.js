import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './blocks/PageHeader';
import { PageFooter } from './blocks/PageFooter';
import { MainMenu } from './blocks/MainMenu';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VotePageContainer } from "./containers/VoterPageContainer";
import {electionStore} from "../store/electionStore";

import { VoterRegistrationPage } from './pages/VoterRegistrationPage';

export const App = () => {
  return (
      <PageLayout>
        <PageHeader />
        <MainMenu />
        <Content>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/vote">
                <Provider store={electionStore}>
                    <VotePageContainer />
                </Provider>
            </Route>
            <Route path="/registration">
              <VoterRegistrationPage />
            </Route>
          </Switch>
        </Content>
        <Switch>
          <Route path="/about">
            <Sidebar className="about-page" />
          </Route>
          <Route path="/">
            <Sidebar className="home-page" />
          </Route>
        </Switch>
        <PageFooter />
      </PageLayout>
  );
};