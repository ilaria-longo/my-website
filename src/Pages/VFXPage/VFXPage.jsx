import Player from "@vimeo/player";
import React, { useEffect, useRef } from "react";

const VFXPage = () => {
  const videoId = "944512360";
  //https://vimeo.com/manage/videos/944512360
  const playerRef = useRef(null);
  useEffect(() => {
    const player = new Player(playerRef.current, {
      id: videoId,
      width: "100%",
    });
    return () => {
      player.unload(); // clean up the player instance
    };
  }, [videoId]);

  return (
    <div>
      <h1>Demo Reel</h1>
      <div
        ref={playerRef}
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
        }}
      />
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default VFXPage;
