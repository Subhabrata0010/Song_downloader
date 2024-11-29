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
          required
          onChange={(e) => setSongLink(e.target.value)}
          className="scrollbar-none w-[300px] flex flex-wrap bg-[#EDEDED] justify-center min-h-[75px] resize-none box-border m-5 p-2 rounded-[10px] text-base/5"
        ></textarea>
        <br />
        <button
          type="submit"
          className="bg-[#4CAF50] w-[170px] h-[45px] font-semibold text-[15px] m-5 rounded-[10px] hover:bg-[#318032]">
          Get Download Link
        </button>
      </form>
    </div>
  );
};
export default SongInput;
