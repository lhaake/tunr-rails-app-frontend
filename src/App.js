import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Playlist from "./components/Playlist/Playlist";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faEdit, faTimes)

function App() {
  	// url to backend
	const url = "https://lhaake-tunr-backend.herokuapp.com/songs/"
	 
  	// http://localhost:3000/songs/

 	// empty song for create
	const emptySong = {
		title: "",
		artist: "",
		time: "",
		favorite: false,
  	};
  
	// State
	const [songs, setSongs] = useState([]);
	const [selectedSong, setSelectedSong] = useState(emptySong);
  	const [favorites, setFavorites] = useState([]);
  

     // API call for songs
      const getSongs = async () => {
        try {
            const res = await fetch(url)
            const json = await res.json()
            setSongs(json)
   
            console.log("songs json", json)
    
        } catch (error) {
            console.error("There is a problem - ", error)
        }
      }

    useEffect(() => {
 
      getSongs()
  }, [])

  //Add to favorites
	const handleFavoritesClick = (favesong) => {
		console.log("Add favorites button clicked!");
		setFavorites([
			...favorites,
			{
				title: favesong.title,
				artist: favesong.artist,
				time: favesong.time,
				favorite: true,
			},
		]);
  };
  

  // handleCreate for creating songs
	const handleCreate = (newSong) => {
		fetch(url, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newSong),
		}).then((response) => getSongs());
  };
  

	//  handleUpdate to edit songs
	const handleUpdate = (song) => {
    fetch(url + song.id, {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(song),
		}).then((response) => getSongs());
  };
  
  // delete a song
	const removeSong = (song) => {
    fetch(url + song.id, {
			method: 'delete',
		}).then((response) => getSongs());
  };

  // select a song 
  const selectSong = (song) => {
    setSelectedSong(song)
  }

  // remove a song from favorites 
  const removeFromFaves = song => {
    console.log("Remove from favorites button clicked!")
    const favesArray = favorites.filter((article, i) => i !== song)
    setFavorites(favesArray)
    console.log("this is removing favorites", favorites)
  }

  return (
	<div className="App">
		<div className="header">
      	<h1 className="tunr-title">TUNR.</h1>
			  <h6>FOR ALL YOUR PLAYLIST NEEDS</h6>
		</div> 
  
	    <Route exact path="/"
			render={(rp) => (
        	<Playlist
         	 {...rp}
			songs={songs}
          	removeSong={removeSong}
          	selectSong={selectSong}
			handleFavoritesClick={handleFavoritesClick}
			/>
      		)}
      	/>

		<Favorites favorites={favorites} removeFromFaves={removeFromFaves} />


        <Route exact path="/"
			render={(rp) => (
			<Form
				{...rp}
				label="ADD NEW SONG"
				song={emptySong}
				handleSubmit={handleCreate}
			/>
			)}
		/>

        <Route exact path="/edit"
			render={(rp) => (
           <Form
            {...rp}
            label="UPDATE SONG" 
            song={selectedSong}
            handleSubmit={handleUpdate} 
            />
        	)}
		/>

   </div>
  );
}

export default App;