import React, { useState } from "react";

const SongInput = ({ fetchDownloadLink }) => {
  const [songLink, setSongId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songLink.trim()) {
      fetchDownloadLink(songId);
    }
  };

  return (
    <div className="inputField">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Song Link.."
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
          style={{ padding: "10px", margin: "20px", width: "350px",flexWrap:'wrap' }}
        />
        <br />
        <button type="submit" style={{margin:'20px'}}>Get Download Link</button>
      </form>
    </div>
  );
};
export default SongInput;
