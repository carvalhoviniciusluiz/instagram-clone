import React from 'react';

import {
  Container,
  ContainerHeader,
  GroupLabel,
  Label,
  ContainerScrollStory,
  ContainerItemStory,
  ContainerPhoto,
  Photo,
  Name
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import avatar from '../../assets/images/avatar.png';

const Stories = () => {
  return (
    <Container>
      <ContainerHeader>
        <Label>Stories</Label>
        <GroupLabel>
          <Icon name="caret-right" size={20} />
          <Label>Watch All</Label>
        </GroupLabel>
      </ContainerHeader>

      <ContainerScrollStory>
        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>

        <ContainerItemStory>
          <ContainerPhoto>
            <Photo source={avatar} />
          </ContainerPhoto>

          <Name>Jake Sully</Name>
        </ContainerItemStory>
      </ContainerScrollStory>
    </Container>
  );
}

export default Stories;
