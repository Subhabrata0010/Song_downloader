import React, { useEffect, useState } from "react";
import SpotifyDownloader from "./components/SpotifyDownloader";
import { Analytics } from "@vercel/analytics/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="font-mono text-center my-10 flex flex-col items-center font-semibold text-2xl">
      <DarkModeSwitch checked={isDarkMode} onChange={setIsDarkMode} size={40} />
      <SpotifyDownloader />
      <Analytics />
    </div>
  );
};

export default App;
