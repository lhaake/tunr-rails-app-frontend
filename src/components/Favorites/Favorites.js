import React from "react";
import "./Favorites.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Favorites = (props) => {
	const songs = props.songs

	let showFavorites = songs.map((fave, index) => {
		return (
			<>
				{fave.favorite ? 
				<div className="faves-container">
				<p>{fave.title}</p>
				<p>{fave.artist}</p>
				<p>{fave.time}</p>
				<p><FontAwesomeIcon icon="times" size="lg" onClick={() => {
               props.removeFromFaves(fave, index) }} /> </p>
			   </div>
			: null }
			</>
		)
	})
	
	return (
		<div className="title-favorites">
			<h1>Favorite Songs List</h1>
			<div className="favorites">{showFavorites}</div>
		</div>
	);
};
export default Favorites;
