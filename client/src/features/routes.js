import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EditorContainer from './editor/containers/EditorContainer';

const Screens = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ EditorContainer } />
      </Switch>
    </Router>
  );
};

export default Screens;
