import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 40px;
`;

export const ButtonAction = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
