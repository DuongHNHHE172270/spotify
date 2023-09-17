import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Contex';
function Playing() {
    const {song, handleSetSong, DataSongs} = useContext(Songs)
    const handleNext = () =>{
        handleSetSong(song.id + 1)
    }

    const handleprew = () => {
        const previousSongId = song.id - 1 < 0 ? DataSongs.length - 1 : song.id - 1;
        handleSetSong(previousSongId);
    }
    const handleEnd = () =>{
        handleSetSong(song.id + 1)
    }

    return ( 
        <div>
            <AudioPlayer 
                src={song.url} 
                layout="stacked-reverse" 
                className='player-music' 
                showSkipControls={true} 
                showJumpControls={false}
                onClickNext={handleNext} 
                onClickPrevious={handleprew} 
                onEnded={handleEnd}
            />
        </div>
     )
}

export default Playing;