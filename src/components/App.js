import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './blocks/PageHeader';
import { PageFooter } from './blocks/PageFooter';
import { MainMenu } from './blocks/MainMenu';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

import { VoterRegistrationPage } from './pages/VoterRegistrationPage';
import { RegisterAVoterPage } from './pages/RegisterAVoterPage';
import { ViewRegisteredVotersPage } from './pages/ViewRegisteredVotersPage';

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
            <Route path="/registration">
              <VoterRegistrationPage />
            </Route>
            <Route path="/register">
                <RegisterAVoterPage />
            </Route>
            <Route path="/voters">
                <ViewRegisteredVotersPage />
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

          <Route path="/registration">
            <Sidebar className="registration-page" />
          </Route>
        </Switch>
        <PageFooter />
      </PageLayout>
  );
};