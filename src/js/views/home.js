import React, { useState, useEffect, useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { HomeCard } from "../component/HomeCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="characters-container overflow-auto col-12">
        <h2 className="d-block characters-title">Characters</h2>
        <div className="d-flex">
          {store.characters.map((character, i) => {
            return (
              <HomeCard index={i + 1} category="character" item={character} />
            );
          })}
        </div>
      </div>
      <div className="planets-container  overflow-auto col-12">
        <h2 className=" d-block planets-title">Planets</h2>
        <div className="d-flex">
          {store.planets.map((planet, i) => {
            return <HomeCard index={i + 1} category="planet" item={planet} />;
          })}
        </div>
      </div>
      <div className="vehicles-container overflow-auto col-12">
        <h2 className="d-block vehicles-title">Vehicles</h2>
        <div className="d-flex">
          {store.vehicles.map((vehicle, i) => {
            return <HomeCard index={i + 1} category="vehicle" item={vehicle} />;
          })}
        </div>
      </div>
    </div>
  );
};
