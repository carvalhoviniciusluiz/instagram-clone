import React from 'react';

import { Container, Logo, ButtonAction } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Container>
      <ButtonAction>
        <Icon name="camera" size={26} />
      </ButtonAction>

      <Logo source={logo} />

      <ButtonAction>
        <Icon name="paper-plane" size={26} />
      </ButtonAction>
    </Container>
  )
}

export default Header;
