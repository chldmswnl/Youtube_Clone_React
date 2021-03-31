import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import VideoPage from "./components/videoPage/videoPage";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState("");

  const getVideo = (video) => {
    setVideo(video);
    console.log(video);
  };
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      {video ? (
        <div className={styles.page}>
          <VideoPage video={video} />
          <VideoList videos={videos} getVideo={getVideo} />
        </div>
      ) : (
        <VideoList videos={videos} getVideo={getVideo} />
      )}
    </div>
  );
}

export default App;
