# Song Downloader 🎵

Song Downloader is a React-based application for fetching and downloading songs from Spotify using their Song Links. It integrates a clean UI and a functional API to deliver a seamless experience.

## Features
- 🎶 Fetch detailed song metadata from Spotify.
- 🔗 Generate and display a direct download link for any Spotify track.
- 🌐 Responsive and visually appealing user interface.

## Technologies Used
- **React** for creating the frontend.
- **TailwindCSS** for styling and layouts.
- **Spotify Downloader API** from RapidAPI for backend integration.

## Getting Started

### Prerequisites
- Install **Node.js**.
- Install **TailwindCSS**.
- Obtain an API key from [RapidAPI](https://rapidapi.com/).

### Installation
1. Clone the repository :
     ```bash
      git clone https://github.com/Subhabrata0010/ToDo-app.git
2. Navigate to the project directory :
      ```bash
      cd ToDo-app
3. Install dependencies :
      ```bash
      npm install
4. Configure your API :
    
    - Replace `{RapidAPI_key}` in the application code with your actual RapidAPI key.
5. Run file :
      ```bash
      npm run dev

## How to Use
1. Enter a **Spotify Song ID** in the input field.
2. Click on **Fetch Download Link**.
3. If the song exists, a **Download Song** button will appear.
4. Clicking the button redirects to the direct download link.

## API Integration
This app communicates with the **Spotify Downloader API**, retrieving:
- Song Title, Artist, Album, Release Date.
- **Direct Download Links** for the requested song.

#### API Endpoint:  
    
    https://spotify-downloader9.p.rapidapi.com/downloadSong

## Contributing
- Fork the repository.
- Create a feature branch.
- Submit a pull request for review.

 
