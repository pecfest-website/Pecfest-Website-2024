import React from 'react';

const LazyVideo = ({ src }) => (
  <video style={{ width: '100%', maxWidth: '300px' }} controls preload="none">
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default LazyVideo;
