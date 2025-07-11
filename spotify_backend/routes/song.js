import express from 'express';
const router = express.Router();
import passport  from "passport";
import Song from "../models/Songs.js";
import User from "../models/User.js";

router.post("/create",passport.authenticate("jwt",{session:false}),
async (req,res)=>{
    const {name, thumbnail, track} = req.body;
        if (!name || !thumbnail || !track) {
            return res
                .status(301)
                .json({err: "Insufficient details to create song."});
        }
        const artist = req.user._id;
        const songDetails = {name, thumbnail, track, artist};
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
});

router.get("/get/mysongs", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const songs = await Song.find({ artist: req.user._id }).populate("artist"); 
            return res.status(200).json({ data: songs });
        } catch (err) {
           return res.status(500).json({ err: "Failed to fetch songs" });
        }
    }
);
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const {artistId} = req.params;
            const artist = await User.find({_id:artistId});
            if(!artist){
                return res.status(301).json({err:"Artist doesnot exist"})
            }
            const songs = await Song.findOne({ artist: artistId }); 
            if(!songs){
                return res.status(304).json("Song not exist by this artist name ")
            }
            return res.status(200).json({ data: songs });
        } catch (err) {
            return res.status(500).json({ err: "Failed to fetch song" });
        }
    }
);
//get all songs my name
router.get("/get/songName/:mySong", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const {mySong} = req.params;

            // Optional: log the value for debugging
            // console.log("Searching for song:", mySong);

            // case-insensitive search
            const regex = new RegExp(`^${mySong}`, "i");
            const getSong = await Song.find({ name : regex}).populate("artist").populate(
                {
                    path:"songs",
                    populate:{
                        path:"artist"
                    }
                }
            );

            if (!getSong) {
                return res.status(404).json({ err: "Song not found" });
            }

            return res.status(200).json({ data: getSong });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ err });
        }
    }
);
export default router;  