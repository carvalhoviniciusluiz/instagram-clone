import React from 'react';

import { Container, Logo, BtnAction } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <BtnAction>
        <Icon name="camera" size={26} />
      </BtnAction>

      <Logo source={logo} />

      <BtnAction>
        <Icon name="paper-plane" size={26} />
      </BtnAction>
    </Container>
  );
};

export default Header;