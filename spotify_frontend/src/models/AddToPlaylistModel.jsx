import { makeAuthenticateGet } from "../utils/serverHelper";
import { useState,useEffect } from "react";

const AddToPlaylistModel = ({closeModel,addSongToPlaylist})=>{

    const [myPlaylists, setMyPlaylists] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticateGet(
                "/playlist/owner/me"
            );
            setMyPlaylists(response.data);
        };
        getData();
    }, []);
    return(
        <>
            <div
            className="absolute bg-black w-screen h-screen opacity-95 flex justify-center items-center"
            onClick={closeModel}>
            <div
                className="bg-app-black w-1/3 rounded-md p-8" onClick={(e)=>e.stopPropagation()}>
                <div className="text-white mb-5 font-semibold text-lg">
                    Select Playlist
                </div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {myPlaylists.map((item,index) => {
                        return (
                            <PlaylistListComponent
                                info={item}
                                key={index}
                                addSongToPlaylist={addSongToPlaylist}
                            />
                        );
                    })}
                    
                </div>
            </div>
        </div>
        </>
    )
}
const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return (
        <div className="bg-[#121212] w-full flex items-center space-x-4 hover:bg-gray-400 hover:opacity-20 cursor-pointer p-3" onClick={()=>{
            addSongToPlaylist(info._id)
        }}>
            <div>
                <img
                    src={info.thumbnail}
                    className="w-10 h-10 rounded"
                    alt="thumbnail"
                />
            </div>
            <div className="text-white font-semibold text-sm">{info.name}</div>
        </div>
    );
};
export default AddToPlaylistModel;