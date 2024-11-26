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
      <h1>Song Downloader <br /> Spotify</h1>
      <SongInput fetchDownloadLink={fetchDownloadLink} />
      {downloadLink && (
        <div className="downloadButton">
          <p style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            fontSize:'15px',
            fontWeight:'700',
            fontStyle:'italic'
          }}>{title} <br style={{height:'10px'}} />{artist}</p>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "#FF6F61",
                marginTop:'30px',
                marginBottom: "10px",
                fontWeight: "600",
                width: "120px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              Download Song
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default SpotifyDownloader;
