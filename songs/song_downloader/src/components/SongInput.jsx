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
        <label for="txt" className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 text-base font-semibold text-slate-800 justify-start items-start flex">Paste song link</label>
        <textarea
          id="txt"
          placeholder="https://open.spotify.com/track/_example_?si=random"
          value={songLink}
          required
          onChange={(e) => setSongLink(e.target.value)}
          className="placeholder:italic scrollbar-none w-[300px] flex flex-wrap bg-[#EDEDED] justify-center min-h-[75px] resize-none box-border p-2 rounded-[10px] text-base/5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
        ></textarea>
        <br />
        <button
          type="submit"
          className="w-[170px] h-[45px] bg-[#4CAF50] cursor-pointer transition-all text-black  rounded-lg border-green-950 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:bg-[#269928] text-base mt-6">
          Get Download Link
        </button>
      </form>
    </div>
  );
};
export default SongInput;
