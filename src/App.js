import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Playlist from "./components/Playlist/Playlist";
import SongForm from "./components/SongForm/SongForm";
import Favorites from "./components/Favorites/Favorites";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faEdit, faTimes)

function App() {
  	// url to backend
	const url = "https://lhaake-tunr-backend.herokuapp.com/songs/"

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
		 
		for(let i = 0; i < songs.length; i += 1) {
			if(songs[i]["id"] === favesong["id"]) {
				songs[i]["favorite"] = true
				setSongs([...songs])
			}
		}
  	}

  	// handleCreate for creating songs
	const handleCreate = (newSong) => {
		fetch(url, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newSong),
		}).then((response) => getSongs());
  };
  
	// handleUpdate to edit songs
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
  const removeFromFaves = (song, key) => {
    console.log("Remove from favorites button clicked!")
	
	for(let i = 0; i < songs.length; i += 1) {
		if(songs[i]["id"] === song["id"]) {
			songs[i]["favorite"] = false
			setSongs([...songs])
		}
	}
  }

  return (
	<div className="App">
		<div className="header">
      		<h1 className="tunr-title">TUNR.</h1>
			<h5>For All Your Playlist Needs</h5>
		</div> 
		<Switch>
	    <Route exact path="/"
			render={(rp) => (
			<>
        	<Playlist
         		{...rp}
				songs={songs}
				removeSong={removeSong}
				selectSong={selectSong}
				removeFromFaves={removeFromFaves} 
				handleFavoritesClick={handleFavoritesClick}
			/>
			<Favorites
				removeFromFaves={removeFromFaves}
				songs={songs} 
			/> 
			<SongForm
				{...rp}
				label="Add a New Song"
				song={emptySong}
				handleSubmit={handleCreate}
			/>
			</>
      		)}
      	/>

        <Route path="/edit"
			render={(rp) => (
           <SongForm
            {...rp}
            label="Edit Song" 
            song={selectedSong}
            handleSubmit={handleUpdate} 
            />
        	)}
		/>
		</Switch>

   </div>
  );
}

export default App;


// http://localhost:3000/songs/

// const [favorites, setFavorites] = useState([]);

// filter() is evaluating if favoritesong index doesnt equal the index val passed in (that we want to remove), then add to the favesArray
	// const favesArray = favorites.filter((favoritesong, i) => i !== key)
	// setFavorites(favesArray)

// In handleFavoritesClick
		// setFavorites([
		// 	...favorites,
		// 	{
		// 		id: favesong.id,
		// 		title: favesong.title,
		// 		artist: favesong.artist,
		// 		time: favesong.time,
		// 		favorite: true,
		// 	},
		// ]);	