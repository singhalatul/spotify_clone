import express from "express";
const router = express.Router();
import passport from "passport";
import Playlist from "../models/Playlist.js";
import User from "../models/User.js";
import Song from "../models/Songs.js";

router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try{
        const currentUser = req.user;
        const {name,thumbnail,songs} = req.body;
        if(!name || !thumbnail ||!songs){
           return res.status(301).json({Err:"Details are missing"});
        }
        const playlistData = {
            name,
            thumbnail,
            songs,
            owner:currentUser._id,
           collaborators:[],
        };
        const playlist = await Playlist.create(playlistData);
       return res.status(200).json(playlist);
    }
    catch(err){
        console.error("Error creating playlist ",err);
       return res.status(500).json({Err : "Server error while creating a playlist"})
    }
    
})

//get playlist by id
router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try{
        const {playlistId} = req.params;
       
        const playlist = await Playlist.findOne({_id:playlistId}).populate({
            path:"songs",
            populate:{
                path:"artist"
            }
        })
        if(!playlist){
           return res.status(301).json({Err: "Invalid Id"})
        }
       return res.status(200).json(playlist);
    }
    catch(err){
        console.error("Error creating playlist ",err);
        return res.status(500).json({Err : "error  while getting playlist"})
    }
});

// getplaylist made by me 
router.get("/owner/me", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const ownerId = req.user._id;
            const playlists = await Playlist.find({owner:ownerId}).populate("owner");
            return res.status(200).json({data:playlists});
        } catch (err) {
            return res.status(500).json({ err: "Failed to fetch playlist" });
        }
    }
);

 //get all playlist created by particular artist
 router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try{
        const {artistId} = req.params;
        const artist = await User.findOne({_id:artistId});
        if(!artist){
            return res.status(304).json({Err: "Invalid Artist Id"})
        }
       
        const playlists = await Playlist.find({owner:artistId});
        // if(!playlists){
        //    return res.status(301).json({Err: "Playlist is not available"})
        // }
        return res.status(200).json(playlists);
    }
    catch(err){
        console.error("Error creating playlist ",err);
        return res.status(500).json({Err : "error  while getting playlist"})
    }
});

//Add song to playlist
router.post("/add/song", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const currentUser = req.user;
        const { songId, playlistId } = req.body;

        // Get playlist document
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ err: "Invalid playlist ID" });
        }

        // Permission check: only owner or collaborators can modify
        if (
            playlist.owner.toString() !== currentUser._id.toString() &&
            !playlist.collaborators.includes(currentUser._id)
        ) {
            return res.status(403).json({ err: "Not allowed to modify this playlist" });
        }

        // Check if song exists
        const song = await Song.findById(songId);
        if (!song) {
            return res.status(404).json({ err: "Song does not exist" });
        }

        // Avoid duplicates (optional)
        if (playlist.songs.includes(songId)) {
            return res.status(400).json({ err: "Song already in playlist" });
        }

        // Add song to playlist
        playlist.songs.push(songId);
        await playlist.save();

        return res.status(200).json({ data: playlist });
    } catch (err) {
        console.error("Error adding song to playlist", err);
        return res.status(500).json({ err: "Error while adding song to playlist" });
    }
});

export default router;