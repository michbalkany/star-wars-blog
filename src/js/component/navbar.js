import React ,{ useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link>
				<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
  {	store.favorites.map((fav, index)=>{
	console.log(fav)
		return <li key={index}>{fav} <i onClick={()=>{
			actions.removeFav(fav)
		}} className="fas fa-trash-alt m-2"></i></li>;

}
)}
  </ul>
</div>				</Link>
			</div>
		</nav>
	);
};
