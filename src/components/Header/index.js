import React from 'react';

import { Container, Logo, BtnAction } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <BtnAction>
        <FontAwesome5 name="camera" size={26} />
      </BtnAction>

      <Logo source={logo} />

      <BtnAction>
        <FontAwesome5 name="paper-plane" size={26} />
      </BtnAction>
    </Container>
  );
};

export default Header;
