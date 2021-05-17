import './App.css';
import React from 'react';
import {Router} from '@reach/router';

import SearchComponent from './components/SearchComponent';
import Resource from './components/Resource';

function App() {
  return (
    <>
      <SearchComponent/>
      <Router>
      <Resource path='/:resource/:id'/>
      </Router>
    </>
  );
}

export default App;
