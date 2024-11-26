import React, { useState } from "react";

const SongInput = ({ fetchDownloadLink }) => {
  const [songLink, setSongLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songLink.trim()) {
      fetchDownloadLink(songLink);
    }
  };

  return (
    <div className="inputField">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste Song Link Here..."
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
          style={{
            padding: "8px",
            margin: "20px",
            width: "300px",
            flexWrap: "wrap",
            backgroundColor: "#EDEDED",
            justifyContent: "center",
            borderRadius: "10px",
            minHeight: "75px",
            resize: "none",
            boxSizing: "border-box",
            scrollbarWidth: "none",
            fontSize: "15px",
          }}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{
            margin: "20px",
            backgroundColor: "#4CAF50",
            width: "170px",
            height: "45px",
            fontWeight: "600",
            borderRadius:'10px',
            fontSize:'15px',
          }}
        >
          Get Download Link
        </button>
      </form>
    </div>
  );
};
export default SongInput;
