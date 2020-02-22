import React from 'react';

import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Posts from './src/components/Posts';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Stories/>
      <Posts/>
    </React.Fragment>
  )
}

export default App;
