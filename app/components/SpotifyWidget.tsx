"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type NowPlayingData = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export default function SpotifyWidget() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // Poll every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.isPlaying;

  return (
    <div className="lg:col-span-1 border border-border-dark bg-card p-6 md:p-8 hover:border-text-secondary transition-colors interactive flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-center mb-6">
        <span className="font-mono text-xs text-text-secondary">Listening To</span>
        <span className="flex items-center gap-1 h-4">
          {isPlaying ? (
            <>
              <motion.span animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-[3px] bg-accent-primary block" />
              <motion.span animate={{ height: [12, 6, 12] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-accent-primary block" />
              <motion.span animate={{ height: [6, 14, 6] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[3px] bg-accent-primary block" />
            </>
          ) : (
            <>
              <span className="w-[3px] h-2 bg-text-secondary/50 block" />
              <span className="w-[3px] h-2 bg-text-secondary/50 block" />
              <span className="w-[3px] h-2 bg-text-secondary/50 block" />
            </>
          )}
        </span>
      </div>

      {isPlaying && data ? (
        <a href={data.songUrl} target="_blank" rel="noreferrer" className="flex gap-4 items-center group">
          <div className="w-16 h-16 relative overflow-hidden flex-shrink-0 border border-border-dark bg-background-secondary">
            <Image
              src={data.albumImageUrl}
              alt={data.album}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              unoptimized
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-mono text-sm font-bold text-text-primary truncate group-hover:underline underline-offset-4">{data.title}</span>
            <span className="font-mono text-xs text-text-secondary truncate mt-1">{data.artist}</span>
          </div>
        </a>
      ) : (
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 bg-background-secondary border border-border-dark flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary opacity-50">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-mono text-sm font-bold text-text-primary truncate opacity-50">Not Playing</span>
            <span className="font-mono text-xs text-text-secondary truncate mt-1">Spotify Offline</span>
          </div>
        </div>
      )}
    </div>
  );
}
