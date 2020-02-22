import React from 'react';

import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Posts from './src/components/Posts';
import Tabbar from './src/components/Tabbar';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Stories/>
      <Posts/>
      <Tabbar/>
    </React.Fragment>
  )
}

export default App;
