import React, { useState } from "react";
import SongInput from "./SongInput";
import Card from "./Card";

const SpotifyDownloader = () => {
  const [downloadLink, setDownloadLink] = useState(null);
  const [artist, setArtist] = useState(null);
  const [title, setTitle] = useState(null);

  const fetchDownloadLink = async (songLink) => {
    const url = `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${songLink}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "{RapidAPI_key}", // Replace with your RapidAPI key
        "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Check if the response has the required structure and assign the downloadLink
      if (result.success && result.data && result.data.downloadLink) {
        setDownloadLink(result.data.downloadLink);
        setArtist(result.data.artist);
        setTitle(result.data.title);
      } else {
        console.error("Download link not found in response:", result);
        setDownloadLink(null);
        setArtist(null);
        setTitle(null);
      }
    } catch (error) {
      console.error("Error fetching download link:", error);
      setDownloadLink(null);
      setArtist(null);
      setTitle(null);
    }
  };

  return (
    <div className="downloadButtonContainer">
      <h1 className="mb-4">
        Song Downloader <br /> Spotify
      </h1>
      <SongInput fetchDownloadLink={fetchDownloadLink} />
      {downloadLink && (
        <div>
          <Card title={title} artist={artist}/>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <button className="w-[170px] h-[45px] bg-[#ff6f61] cursor-pointer transition-all text-black  rounded-lg border-red-950 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:bg-[#e93d3d] text-base mt-6">
              Download Song
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default SpotifyDownloader;
