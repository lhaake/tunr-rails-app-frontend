import React from "react";
import "./Playlist.css";
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Playlist = (props) => {

  let songs = props.songs

  const showPlaylist = () => (
  <>
    <div className="filter-container"> 
    <h1>Playlist</h1>
    <p>On TUNR, you can add songs to include in your playlist, as well as the capability to favorite, edit and delete songs.</p>
    <p>Click the heart to add or remove a song to your favorites list.</p>


  <Table responsive="sm">
    <thead>
      <tr>
         <th></th>
         <th>Title</th>
         <th>Artist</th>
         <th>Time</th>
         <th>Fave _ Edit _ Delete</th>
      </tr>
    </thead>
    {songs.map((song, key) => (
    <tbody>
      <tr>
        <td>{key + 1}</td>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.time}</td>
        <td>
             <ul className="icons">

              <li>{ song.favorite ? <FaHeart color="#c70039" onClick={() => props.removeFromFaves(song, key)}/> : <FaRegHeart onClick={() => props.handleFavoritesClick(song)} />  } </li>
              <li><FontAwesomeIcon icon="edit" size="md" onClick={() => {
                props.selectSong(song)        
                props.history.push("/edit")
              }} /></li>
              <li><FontAwesomeIcon icon="times" size="md" onClick={() => {
                props.removeSong(song)        
              }} /></li>
            </ul>
        </td>   
      </tr>
    </tbody>
    ))}
     </Table>
      </div>
  </> 
) 
return songs.length > 0 ? showPlaylist() :  <h3>Loading...</h3>

}

export default Playlist;

