// import Player from "@vimeo/player";
import React, { useEffect, useRef } from "react";
import "./VFXPage.scss";

const VFXPage = () => {
  const videoId = "944512360";
  //https://vimeo.com/manage/videos/944512360
  const playerRef = useRef(null);
  // useEffect(() => {
  //   const player = new Player(playerRef.current, {
  //     id: videoId,
  //     width: "100%",
  //   });
  //   return () => {
  //     player.unload(); // clean up the player instance
  //   };
  // }, [videoId]);

  return (
    <div>
      <div className="title">
        <h1>Ilaria's Demo Reel</h1>
      </div>
      <div

      // style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <iframe
          className="video"
          src="https://player.vimeo.com/video/944512360?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            // top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="Ilaria Longo - Compositing Showreel"
        ></iframe>
      </div>
      {/* <script src={{"https://player.vimeo.com/api/player.js"}}></script> */}
      {/* <div>
        <h1>Demo Reel</h1>
      </div>
      <div
        className="video"
        ref={playerRef}
        style={{
          position: "relative",
          width: "700px",
          height: "auto",
        }}
      />
      <script src="https://player.vimeo.com/api/player.js"></script> */}
    </div>
  );
};

export default VFXPage;
