import React from 'react';
import { Video, Container } from './Styled';

function VideoGroup({ videos }) {
  return (
    <Container>
      {videos.map(({ thumbnail_url, video_url, id, title, description }) => (
        <Video key={id}>
          <img src={thumbnail_url} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </Video>
      ))}
    </Container>
  );
}

export default VideoGroup;
