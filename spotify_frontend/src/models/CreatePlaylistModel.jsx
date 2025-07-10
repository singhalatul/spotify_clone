import Input from "../components/shared/Input";
import {useState} from "react";
import { makeAuthenticate } from "../utils/serverHelper";

const CreatePlaylistModel = ({closeModel})=>{
     const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async()=>{
        const res = await makeAuthenticate(
            "/playlist/create",
             {name: playlistName, thumbnail: playlistThumbnail, songs: []}
        );
        if (response._id) {
            closeModal();
        }


    }
    return(
        <>
             <div
            className="absolute bg-black w-screen h-screen opacity-95 flex justify-center items-center"
            onClick={closeModel}>
            <div
                className="bg-app-black w-1/3 rounded-md p-8" onClick={(e)=>e.stopPropagation()}>
                <div className="text-white mb-5 font-semibold text-lg">
                    Create Playlist
                </div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <Input
                        label="Name"
                        labelClassName={"text-white"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <Input
                        label="Thumbnail"
                        labelClassName={"text-white"}
                        placeholder="Thumbnail"
                        value = {playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div
                        className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
                        onClick={createPlaylist}
                    >
                        Create
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CreatePlaylistModel;