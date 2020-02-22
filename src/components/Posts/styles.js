import styled from 'styled-components';

export const ContainerScroll = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding-bottom: 20px;
`;

export const Container = styled.View`
  height: 560px;
  padding-bottom: 20px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const ContainerItemStory = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContainerPhoto = styled.View`
  background-color: #F89B3B;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const Photo = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border-width: 1px;
  border-color: #fff;
`;
export const Name = styled.Text`
  height: 20px;
  font-size: 12px;
  padding: 5px;
`;

export const PostPhoto = styled.Image.attrs({
  resizeMode: 'cover'
})`
  flex: 1;
  margin: 20px;
  border-radius: 8px;
`;

export const ContainerActions = styled.View`
  padding: 0px 20px;
`;
export const ContainerActionsIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const GroupIcons = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  padding: 2px 0px;
  font-size: 12px;
`;
