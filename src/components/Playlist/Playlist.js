import React from "react";
import "./Playlist.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Playlist = (props) => {
 
   let songs = props.songs
    if(!songs) return <div>Loading...</div>
    let showSongs = ""
    showSongs = songs.map((song) => {
        return (
        <p className="playlist">
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.time}</p>

            <ul className="icons">
              <li><FontAwesomeIcon icon="heart" size="lg" color="maroon" onClick={() => props.handleFavoritesClick(song)} /></li>
              <li><FontAwesomeIcon icon="edit" size="lg" onClick={() => {
                props.selectSong(song)        
                props.history.push("/edit")
              }} /></li>
              <li><FontAwesomeIcon icon="times" size="lg" onClick={() => {
                props.removeSong(song)        
              }} /></li>
            </ul>
        </p>
        )
    })

    return (
        <>
        <h1>PLAYLIST 1</h1>
        {showSongs}
        </>
    )
}

export default Playlist;