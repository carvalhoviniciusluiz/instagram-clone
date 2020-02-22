import React, { useState } from 'react';

import {
  Container,
  SubContainer
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'

const Tabbar = () => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 22
  })

  return (
    <Container>
      <SubContainer>
        <Icon name="home" { ...iconConfigure } />
        <Icon name="search" { ...iconConfigure } />
        <Icon name="instagram" { ...iconConfigure } />
        <Icon name="heart" { ...iconConfigure } />
        <Icon name="user" { ...iconConfigure } />
      </SubContainer>
    </Container>
  )
};

export default Tabbar;
