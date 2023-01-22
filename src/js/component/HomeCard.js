import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const HomeCard = (props) => {
  const { store, actions } = useContext(Context);
  const [found, setFound] = useState(false);
  console.log(props);
  useEffect(() => {
    let position = store.favorites.find((item) => item == props.name);
    if (position) {
      setFound(true);
    } else {
      setFound(false);
    }
    console.log(store.favorites);
  });
  const handleFavorite = (favorite) => {
    actions.addFavorite(favorite);
  };
  return (
    <div className="card-container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text"></p>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Link
                to={"/" + props.category + "/" + props.index}
                className="btn btn-primary"
              >
                More Info
              </Link>
              <br></br>
              <div className="d-flex align-items-center justify-content-center">
              <button onClick={() => handleFavorite(props.item.name)}>
                {found ? (
                  <i className="fas fa-heart" />
                ) : (
                  <i className="far fa-heart" />
                )}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
