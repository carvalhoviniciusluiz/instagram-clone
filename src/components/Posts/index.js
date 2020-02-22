import React, { useState } from 'react';

import {
  ContainerScroll,
  Container,
  ContainerHeader,
  ContainerItemStory,
  ContainerPhoto,
  Photo,
  Name,
  PostPhoto,
  ContainerActions,
  ContainerActionsIcons,
  GroupIcons,
  Label
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import posts from './posts';

const Posts = () => {
  const [iconsConfigure] = useState({
    color: '#333',
    size: 20,
    style: {
      paddingRight: 15
    }
  });

  return (
    <ContainerScroll>
      { posts && posts.map((post, index) => (
        <Container key={index}>
          <ContainerHeader>
              <ContainerItemStory>
                <ContainerPhoto>
                  <Photo source={{ uri: post.profile.photo }} />
                </ContainerPhoto>
                <Name>{post.profile.name}</Name>
              </ContainerItemStory>
              <Icon name="ellipsis-h" size={14} color="#888" />
          </ContainerHeader>
          <PostPhoto source={{ uri: post.postPhoto }} />
          <ContainerActions>
            <ContainerActionsIcons>
              <GroupIcons>
                <Icon name="heart" {...iconsConfigure} />
                <Icon name="circle" {...iconsConfigure} />
                <Icon name="paper-plane" {...iconsConfigure} />
              </GroupIcons>
              <Icon name="bookmark" {...iconsConfigure} />
            </ContainerActionsIcons>
            <Label>2.850 Likes</Label>
            <Label>marinaii Hi !! #life</Label>
          </ContainerActions>
        </Container>
      )) }
    </ContainerScroll>
  );
};

export default Posts;
