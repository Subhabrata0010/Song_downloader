import React, { useState } from "react";
import SongInput from "./SongInput"; // The input component for entering song ID.

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
      <h1>
        Song Downloader <br /> Spotify
      </h1>
      <SongInput fetchDownloadLink={fetchDownloadLink} />
      {downloadLink && (
        <div>
          <p className="flex flex-col items-center text-lg font-bold italic justify-center mt-10">
            {title} <br />
            {artist}
          </p>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#ff6f61] mt-5 font-semibold w-36 h-10 rounded-xl text-base hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-800">
              Download Song
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default SpotifyDownloader;
