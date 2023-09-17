import { useContext, useEffect, useState } from "react";
import { Songs } from "../Contex";
function ListSong() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    useEffect(() => {
        setSongId(song.id)
    }, [song])
    const [ songId, setSongId ] = useState(0)
    const handlePlay = (songId) => {
        setSongId(songId)
        handleSetSong(songId)
    }
    return(
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i class="fa-solid fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr key={index} className={`bg-slate-800 h-12 text-gray-400 hover:bg-gray-600  ${songId === song.id && `bg-gray-600 text-teal-400`}`} onClick={() => handlePlay(song.id)}>
                        <td className="text-center cursor-pointer">{index + 1}</td>
                        <td className="cursor-pointer">{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center"><a href={song.url}><i class="fa-solid fa-download"></i></a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListSong;