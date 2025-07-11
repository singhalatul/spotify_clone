import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticateGet } from "../utils/serverHelper";

const Library = ()=>{
    const [myPlaylists,setMyPlaylists] = useState([]);
    useEffect(()=>{
        const getPlayList = async()=>{
            const res = await makeAuthenticateGet("/playlist/owner/me");
            setMyPlaylists(res.data);
        }
        getPlayList();
    },[])
    return(
        <>
        <LoggedInContainer currActiveScreen={"library"}>
        <div className="text-white text-xl pt-8 font-semibold">
                My Playlists
            </div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {myPlaylists.map((item) => {
                    return (
                        <Card
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                            playlistId={item._id}
                        />
                    );
                })}
            </div>

        </LoggedInContainer>
        </>
    )
}
const Card = ({title, description, imgUrl, playlistId}) => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer"
            onClick={() => {
                navigate("/playlist/" + playlistId);
            }}
        >
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md w-50 h-50" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};
export default Library;