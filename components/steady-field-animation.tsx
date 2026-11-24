"use client";

import { useState } from "react";

export function SteadyFieldAnimation({ title, src, poster, caption }: {
  title: string; src: string; poster: string; caption: string;
}) {
  const [playing, setPlaying] = useState(false);
  return <figure className="scientific-figure edu-animation">
    <img src={playing ? src : poster} alt={title} width={720} height={720} loading="lazy"/>
    <figcaption>
      <strong>{title}</strong>
      <span>{caption}</span>
      <button type="button" aria-pressed={playing} onClick={() => setPlaying(!playing)}>
        {playing ? "Stop animation" : "Play section sweep"}
      </button>
      <a className="figure-fullsize" href={src} target="_blank" rel="noreferrer">Open full-size GIF<span className="sr-only"> (new tab)</span></a>
    </figcaption>
  </figure>;
}
