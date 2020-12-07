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

 //<FontAwesomeIcon icon="heart" size="lg" color="#ec5858" onClick={() => props.handleFavoritesClick(song)} /></li>

        // <p className="playlist">
        //     <p className="title">{song.title}</p>
        //     <p className="artist">{song.artist}</p>
        //     <p className="time">{song.time}</p>

        //     <ul className="icons">
        //       <li><FontAwesomeIcon icon="heart" size="lg" color="maroon" onClick={() => props.handleFavoritesClick(song)} /></li>
        //       <li><FontAwesomeIcon icon="edit" size="lg" onClick={() => {
        //         props.selectSong(song)        
        //         props.history.push("/edit")
        //       }} /></li>
        //       <li><FontAwesomeIcon icon="times" size="lg" onClick={() => {
        //         props.removeSong(song)        
        //       }} /></li>
        //     </ul>
        // </p> 

    // let songs = props.songs
    // if(!songs) return <div>Loading...</div>
    // let showSongs = ""

    // <Table responsive="sm">
    // <thead>
    //   <tr>
    //     <th>#</th>
    //     <th>Title</th>
    //     <th>Artist</th>
    //     <th>Time</th>
    //     <th>Favorite / Edit / Delete</th>
    //   </tr>
    // </thead>
    // { showSongs = songs.map((song, key) => (
    // <tbody>
    //   <tr>
    //     <td>{key + 1}</td>
    //     <td>{song.title}</td>
    //     <td>{song.artist}</td>
    //     <td>{song.time}</td>
    //     <td>
    //          <ul className="icons">
    //           <li><FontAwesomeIcon icon="heart" size="lg" color="maroon" onClick={() => props.handleFavoritesClick(song)} /></li>
    //           <li><FontAwesomeIcon icon="edit" size="lg" onClick={() => {
    //             props.selectSong(song)        
    //             props.history.push("/edit")
    //           }} /></li>
    //           <li><FontAwesomeIcon icon="times" size="lg" onClick={() => {
    //             props.removeSong(song)        
    //           }} /></li>
    //         </ul>
    //     </td>   
    //   </tr>
    // </tbody>
  
    // ))}
    //   </Table>
   
    // return (
    //     <>
    //     <h1>PLAYLIST 1</h1>
    //     {/* <h4 className="title-heading">Title</h4>
    //     <h4 className="artist-heading">Artist</h4>
    //     <h4 className="time-heading">Time</h4>
    //     <h4 className="icons-heading">Favorite / Edit / Delete</h4> */}
    //     {showSongs}
    //     </>
    // )


//         <Table responsive="sm">
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Sport</th>
//         <th>Date</th>
//         <th>Workout Title</th>
//         <th>Time</th>
//         {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ?  <th>Distance</th> : null }
//         <th>Favorite?</th>
//       </tr>
//     </thead>
    
//     {w.map((workout, key) => (
    
//     <tbody>
//       <tr>
//         <td>{key + 1}</td>
//         <td>{workout.sport}</td>
//         <td>{formatDate(workout)}</td>
//         <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
//         <td>{workout.time} minutes</td>
//         {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ? <td>{workout.distance} miles</td> : null }
//         <td>{workout.isFavorite ? <BiLike size="25px" /> : null }</td>
//       </tr>
//     </tbody>
//     ))}
   
//     </Table>
//     </div>
//   </> 
// )