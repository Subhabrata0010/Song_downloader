import React from "react";
import SpotifyDownloader from "./components/SpotifyDownloader"; // Path to your main component

const App = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SpotifyDownloader />
    </div>
  );
};

export default App;
