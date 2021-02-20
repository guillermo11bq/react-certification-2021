import React from 'react';
import styled from './Styled';

function VideoGroup({ videos }) {
  return (
    <styled.container>
      {videos.map(({ thumbnail_url, video_url, id, title, description }) => (
        <styled.video key={id}>
          <img src={thumbnail_url} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </styled.video>
      ))}
    </styled.container>
  );
}

export default VideoGroup;
