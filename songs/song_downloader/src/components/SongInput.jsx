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
          placeholder="Enter Song Link.."
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
          style={{
            padding: "10px",
            margin: "20px",
            width: "350px",
            flexWrap: "wrap",
            backgroundColor: "#EDEDED",
            justifyContent: "center",
            borderRadius: "10px",
            minHeight: "30px",
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
            width: "150px",
            height: "30px",
            fontWeight: "600",
            borderRadius:'10px'
          }}
        >
          Get Download Link
        </button>
      </form>
    </div>
  );
};
export default SongInput;
