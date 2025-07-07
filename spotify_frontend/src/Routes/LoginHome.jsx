import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import {Icon} from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
     {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];
const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];
function LoginHome(){
    return(
        <>
            <div className="w-full h-full flex flex-row">
                {/* leftpart  */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10 overflow-auto">

                <div>
                    {/* this div is for logo */}
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt ="Spotify_logo" width={125}/>
                    </div>
                    {/* div for home,your library */}
                    <div className="py-5">
                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active/>
                        <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"} />
                        <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
                        <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My music"} />
                    </div>
                    {/* this div is for create playlist or something */}
                    <div className="pt-5">
                        <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"} />
                        <IconText iconName={"mdi:cards-heart"} displayText={"Liked"} />
                    </div>
                </div>
                <div>

                    {/* this div is for button to  change lang */}
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center hover:border-white cursor-pointer">
                            <Icon icon="carbon:earth-europe-africa" fontSize={20}/>
                            <div className="ml-2">
                                English
                            </div>
                        </div>
                    </div>
                </div>
                </div >
                {/* rightpart --> main content*/}
                <div className="h-full w-4/5 bg-[#121212] overflow-auto">
                    {/* this div is for navbar */}
                    <div className="navbar w-full bg-black bg-opacity-30 h-1/10 flex justify-end items-center " >
                        <div className="w-1/2 flex h-full">
                            <div className="flex w-2/3 justify-around items-center">
                                <TextWithHover displayText={"premium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <div className="h-1/3 border border-white "></div>
                            </div>
                            <div className ="flex w-2/5 h-full items-center justify-around">
                                <TextWithHover displayText={"Upload song"} />
                                <div className="bg-white w-10 h-10  flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    Ac
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* playlist content  */}
                    <div className="content p-8 pt-0  overflow-auto ">
                        <PlaylistView 
                        titleText={"Focus"}
                        cardsData={focusCardsData}
                        />
                        <PlaylistView 
                        titleText={"Spotify playlist"}
                        cardsData={spotifyPlaylistsCardData}
                        />
                        <PlaylistView 
                        titleText={"Sound of india"}
                        cardsData={focusCardsData}
                        />
                    </div>
                </div>
            </div>        
        </>
    )
};

const PlaylistView = ({titleText,cardsData})=>{
    return (
        <>
        <div className="text-white mt-8">
            <div className="text-white text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-3">
                {
                    cardsData.map(item=>(
                        
                        <Card 
                        key={item.title}
                        title={item.title} 
                        description={item.description} 
                        imgUrl={item.imgUrl}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}


const Card = ({title,description,imgUrl})=>{
    return(
        <>
            <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="py-4">
                <img 
                className="w-full rounded-md"
                src={imgUrl} 
                alt="label image"
                />
            </div>
                <div className="text-white font-semibold py-3">{title}</div>
                <div className="text-gray-500 text-sm">{description}</div>
            </div>
        </>
    )
}

export default LoginHome;