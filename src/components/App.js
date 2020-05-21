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
import { VotePage } from './pages/VotePage';
import {VotePageContainer} from "./containers/VoterPageContainer";

const elections = [
    {
        "id":  "1",
        "name": "Jan Election",
        "questions": [
            {
                "id": "1",
                "question": "Is the Sky Blue?"
            },
            {
                "id": "2",
                "question": "Do you like flowers?"
            },
            {
                "id": "3",
                "question": "Do you like Intuit?"
            }
        ]
    },
    {
        "id":  "2",
        "name": "Feb Election",
        "questions": [
            {
                "id": "1",
                "question": "Do you like React?"
            },
            {
                "id": "2",
                "question": "Do you ride a motorcycle?"
            }
        ]
    },
    {
        "id":  "3",
        "name": "Mar Election",
        "questions": [
            {
                "id": "1",
                "question": "Is your favorite color green?"
            }
        ]
    }
];

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
              <VotePageContainer elections={elections} />
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