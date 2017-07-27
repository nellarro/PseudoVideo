import React from 'react';

const VideoListItem = ({video, onSelect}) => {
  // putting {video} where props should be in the declaration is like saying :
  // const video = props.

  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} alt={video.snippet.description} className="media-object"/>
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  )
}

export default VideoListItem
