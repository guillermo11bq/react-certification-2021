import React from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.component';
import mockedVideos from './mockedVideos';

function VideosPage() {
  return (
    <VideoGroup
      videos={mockedVideos.items.map(({ etag, snippet }) => {
        return {
          thumbnail_url: snippet.thumbnails.default.url,
          video_url: '',
          id: etag,
          title: snippet.title,
          description: snippet.description,
        };
      })}
    />
  );
}

export default VideosPage;
