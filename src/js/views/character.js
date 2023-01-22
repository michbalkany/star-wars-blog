import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Character = () => {
  const [details, setDetails] = useState();
  const { theid } = useParams();
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + theid)
      .then((res) => res.json())
      .then((data) => setDetails(data.result.properties))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="details">
        <div className="image"></div>
        <div className="description">
          <div>{details && details.name}</div>
        </div>
      </div>
      <div className="traits">
        <div>DOB: {details && details.birth_year}</div>
        <div>Eye-color: {details && details.eye_color}</div>
        <div>Gender: {details && details.gender}</div>
        {/* <div>{details && details.films.map((item,i)=>{
          return (<p key={i}>{item}</p>)
        })}</div> */}
      </div>
    </>
  );
};

export default Character;
