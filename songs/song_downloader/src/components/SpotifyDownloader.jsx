import React, { useState } from 'react';
import SongInput from './SongInput'; // The input component for entering song ID.

const SpotifyDownloader = () => {
  const [downloadLink, setDownloadLink] = useState(null);

  const fetchDownloadLink = async (songLink) => {
    const url = `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${songLink}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '{RapidAPI_key}', // Replace with RapidAPI key
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      
      // Check if the response has the required structure and assign the downloadLink
      if (result.success && result.data && result.data.downloadLink) {
        setDownloadLink(result.data.downloadLink);
      } else {
        console.error('Download link not found in response:', result);
        setDownloadLink(null);
      }
    } catch (error) {
      console.error('Error fetching download link:', error);
      setDownloadLink(null);
    }
  };

  return (
    <div className='downloadButtonContainer'>
      <h1>Spotify Song Downloader</h1>
      <SongInput fetchDownloadLink={fetchDownloadLink} />
      {downloadLink && (
        <div className='downloadButton'>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <button>Download Song</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default SpotifyDownloader;
