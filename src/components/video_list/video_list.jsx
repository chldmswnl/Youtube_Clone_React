import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

function VideoList({ videos, getVideo, display }) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          getVideo={getVideo}
          display={display}
        />
      ))}
    </ul>
  );
}

export default VideoList;
