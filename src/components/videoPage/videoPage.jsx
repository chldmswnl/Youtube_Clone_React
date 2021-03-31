import React from "react";

function VideoPage(props) {
  let src = `https://www.youtube.com/embed/${props.video.id}`;
  return (
    <div>
      <iframe width="640" height="360" src={src} frameBorder="0"></iframe>
      <p>{props.video.snippet.title}</p>
      <p>{props.video.snippet.channelTitle}</p>
      <p>{props.video.snippet.publishedAt}</p>
    </div>
  );
}

export default VideoPage;
