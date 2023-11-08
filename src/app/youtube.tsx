"use client";

import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return <YouTube videoId={videoId} />;
};

export default YouTubePlayer;
