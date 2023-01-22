import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const Vehicle = () => {
  const [details, setDetails] = useState();
  const { theid } = useParams();
  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/" + theid)
      .then((res) => res.json())
      .then((data) => setDetails(data.result.properties))
      .catch((err) => console.error(err));
  }, []);

  if (details ) {
    return (
      <>
        <div className="details">
          <div className="image"></div>
          <div className="description">
            <div>{details && details.name}</div>
          </div>
        </div>
        <div className="traits">
          <div>cargo_capacity: {details && details.cargo_capacity}</div>
          <div>consumables: {details && details.consumables}</div>
          <div>cost_in_credits: {details && details.cost_in_credits}</div>
        </div>
      </>
    );
  } else {
    return <div>Information Pending</div>;
  }
};

export default Vehicle;
