import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Playlist = (props) => {
 
   let songs = props.songs
    if(!songs) return <div>Loading...</div>
    let showSongs = ""
    showSongs = songs.map((song) => {
        return (
        <article>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.time}</p>

            <p>
              <FontAwesomeIcon icon="heart" size="lg" onClick={() => props.handleFavoritesClick(song)} />
              <FontAwesomeIcon icon="edit" size="lg" onClick={() => {
                props.selectSong(song)        
                props.history.push("/edit")
              }} />
              <FontAwesomeIcon icon="times" size="lg" onClick={() => {
                props.removeSong(song)        
              }} />
            </p>
        </article>
        )
    })

    return (
        <>
        <h1>Playlist</h1>
        {showSongs}
        </>
    )
}

export default Playlist;