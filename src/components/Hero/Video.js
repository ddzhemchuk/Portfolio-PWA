import { useEffect, useState } from "react";

export default function Video() {
  const [video, setVideo] = useState(null);

  const videoFallback = () => {
    return (
      <picture className="hero_bg">
        <source srcset="/assets/bg/bg.webp" type="image/webp" />
        <img src="/assets/bg/bg.jpg" alt="Background" />
      </picture>
    );
  };

  const videoElement = (src) => {
    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        className="hero_bg"
        src={src}
        disablePictureInPicture
        aria-label="Background video of abstract shapes and colors"
      ></video>
    );
  };

  useEffect(() => {
    const loadVideo = async () => {
      const bgs = [
        {
          src: "/assets/bg/bg.webm",
          data: 'video/webm; codecs="vp9.0"',
        },
        {
          src: "/assets/bg/bg.mp4",
          data: 'video/mp4; codecs="avc1.640033"',
        },
      ];

      const video = document.createElement("video");
      let src = null;

      for (let i = 0; i < bgs.length; i++) {
        if (video.canPlayType(bgs[i].data) === "probably") {
          src = bgs[i].src;
          break;
        }
      }

      
      if (!src) {
        return setVideo(videoFallback());
      }

      try {
        const cache = await caches.open("dzhemchuk.dev");
        const response = await cache.match(src);

        if (response) {
          const blob = await response.blob();
          setVideo(videoElement(URL.createObjectURL(blob)));
        } else {
          const resp = await fetch(src);
          if (!resp.ok) throw new Error("Failed to load video");

          const blob = await resp.blob();
          setVideo(videoElement(URL.createObjectURL(blob)));
          cache.put(src, new Response(blob));
        }
      } catch (e) {
        setVideo(videoFallback());
      }
    };

    loadVideo();
  }, []);

  return video;
}
