import React from 'react';
import {Link} from "react-router-dom";

export const SuccessScreen = () => {

    return (
      <>
          <h2>Vote casted successfully</h2>
          <Link to="/">Home</Link>
      </>
    );
}