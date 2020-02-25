import React, { useState } from 'react';

import {
  Container,
  SubContainer
} from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

const Tabbar = () => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 22
  })

  return (
    <Container>
      <SubContainer>
        <FontAwesome5 name="home" { ...iconConfigure } />
        <FontAwesome5 name="search" { ...iconConfigure } />
        <FontAwesome5 name="instagram" { ...iconConfigure } />
        <FontAwesome5 name="heart" { ...iconConfigure } />
        <FontAwesome5 name="user" { ...iconConfigure } />
      </SubContainer>
    </Container>
  )
};

export default Tabbar;
