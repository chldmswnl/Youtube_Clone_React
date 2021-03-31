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
  };
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };
  useEffect(() => {
    console.log(video);
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <section className={styles.content}>
        {video && (
          <div className={styles.detail}>
            <VideoPage video={video} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            getVideo={getVideo}
            display={video ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
