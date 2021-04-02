import React from "react";
import styles from "./videoPage.module.css";

const VideoPage = ({ video, video: { snippet } }) => {
  const publishedAt = JSON.stringify(snippet.publishedAt).substring(1, 11);

  console.log(publishedAt);

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        width="100%"
        title="youtube player"
        height="400px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.videoInfo}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.published}>{publishedAt}</p>
        <hr />
        <div className={styles.channel}>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
          <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
