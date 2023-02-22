import { useEffect, useState } from "react";

export default function VideoPlayer({ videoSource, project }) {
  const [videoElement, setVideoElement] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const vid = document.getElementById(project);
    setVideoElement(vid);
  }, []);

  useEffect(() => {
    if (videoElement) {
      console.log("adding play");
      videoElement.setAttribute("autoPlay", "");
      let playCount = 0;

      const playXTimes = (x) => {
        videoElement.load();
        videoElement.playbackRate = 3;

        videoElement.onended = function () {
          if (playCount === 2) {
            setPlaying(false);
          }

          while (playCount < 2) {
            videoElement.play();
            playCount++;
          }
        };
      };

      playXTimes(2);
    }
  }, [videoElement, project]);

  console.dir(videoElement);

  return (
    <div className="relative">
      <video id={`${project}`} muted className="w-170 rounded-xl">
        <source src={videoSource} type="video/mp4" />
        <p>Your browser does not support HTML video.</p>
      </video>
      {!playing ? (
        <button
          onClick={() => {
            setPlaying(true);
          }}
          className="flex items-center justify-center absolute w-20 h-20 bg-teal-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span className="pointer-events-none material-symbols-outlined material-icons md-36 text-white">
            play_arrow
          </span>
        </button>
      ) : null}
    </div>
  );
}
