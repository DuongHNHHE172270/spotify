import { useState } from 'react';
import './App.css';
import InfoSong from './Combonent/InfoSong';
import ListSong from './Combonent/ListSong';
import Navbar from './Combonent/Navbar';
import Playing from './Combonent/Playing';
import { Songs } from './Contex';
import DataSongs from './data/songs.json'
function App() {
  const [ song, setSong ] = useState(DataSongs[0])
  const handleSetSong = (songId) => {
    const song = DataSongs.find(song => song.id === songId)
    if(!song){
      setSong(DataSongs[0])
    }
    else{

      setSong(song)
    }
  }
  return (
    <div className="App">
       <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar />
          <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
            <InfoSong/>
            <ListSong/>
          </div>
          <Playing/>
       </Songs.Provider>
    </div>
  );
}

export default App;
