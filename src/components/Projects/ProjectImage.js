import { useEffect, useState } from "react";

export default function ProjectImage({ image: src, name }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      caches.open("dzhemchuk.dev").then((cache) => {
        cache.match(src).then((response) => {
          if (response) {
            response.blob().then((blob) => {
              const url = URL.createObjectURL(blob);
              setImage(url);
            });
          } else {
            fetch(src, { cache: "force-cache" }).then((response) => {
              response.blob().then((blob) => {
                const url = URL.createObjectURL(blob);
                setImage(url);
                cache.put(src, new Response(blob));
              });
            });
          }
        });
      });
    };

    importImage();
  }, [src]);
  return (
    <div className="project__image">
      <img src={image} alt={name} decoding="async" loading="lazy" />
    </div>
  );
}
