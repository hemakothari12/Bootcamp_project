import React from 'react';

import './PageFooter.css';

export const PageFooter = () => {

    const currentYear = new Date().getFullYear();

    return (
      <footer id="page-footer">
        <small>&copy; { currentYear } Minions Company, Inc. All Rights Reserved.</small>
      </footer>
    );


};