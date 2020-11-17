import React from "react";
import "./Favorites.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Favorites = (props) => {
	console.log(props);
	const faves = props.favorites;

	let showFavorites = faves.map((fave, index) => {
		return (
			<div className="fav-song">
				<p>{fave.title}</p>
				<p>{fave.artist}</p>
				<p>{fave.time}</p>
				<FontAwesomeIcon icon="times" size="lg" onClick={() => {
               props.removeFromFaves(index) }} /> 
			
			</div>
		);
	});
	return (
		<div>
			<h1>Favorite Songs List</h1>
			<div className="favorites">{showFavorites}</div>
		</div>
	);
};
export default Favorites;