"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Episode {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  cover?: string;
  audioUrl?: string;
}

export default function PodcastPlayer() {
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetch("/api/podcast")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setEpisode(data);
      })
      .catch((err) => console.error("Erreur chargement épisode:", err));
  }, []);

  if (!episode) return null;

  const formattedDate = new Date(episode.pubDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-2 bg-blanc border-2 border-orange rounded-lg my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {episode.cover && (
          <div className="hidden md:flex relative shrink-0 overflow-hidden rounded-xl group">
            <Image
              src={episode.cover}
              alt={episode.title}
              width={176}
              height={176}
              className="w-44 h-44 object-cover rounded-xl "
            />
          </div>
        )}

        <div className="w-full flex-1 flex flex-col justify-between space-y-3 text-left">
          <div>
            <span className="text-xs font-semibold tracking-wider text-palmier">
              Notre dernier épisode • {formattedDate}
            </span>
            <h3 className="text-xl font-bold text-nuit mt-1 line-clamp-2">{episode.title}</h3>
            <p className="text-xs text-nuit mt-2 line-clamp-2 leading-relaxed">{episode.description}</p>
          </div>

          {episode.audioUrl && (
            <div className="pt-2">
              <audio controls src={episode.audioUrl} className="w-full h-10  rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
