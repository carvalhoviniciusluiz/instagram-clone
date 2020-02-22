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

import stories from '../Posts/stories'

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
        {stories && stories.map((story, index) => (
          <ContainerItemStory key={index}>
            <ContainerPhoto>
              <Photo source={story.photo} />
            </ContainerPhoto>

            <Name>{story.name}</Name>
          </ContainerItemStory>
        ))}
      </ContainerScrollStory>
    </Container>
  );
}

export default Stories;
