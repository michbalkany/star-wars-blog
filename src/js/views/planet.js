import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';



const Planet = () => {
  const [details, setDetails] = useState();
  const { theid } = useParams();
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + theid)
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
        <div>Population: {details && details.population}</div>
        <div>Climate: {details && details.climate}</div>
        <div>Gravity: {details && details.gravity}</div>
        {/* <div>{details && details.films.map((item,i)=>{
          return (<p key={i}>{item}</p>)
        })}</div> */}
      </div>
    </>
  );
};

export default Planet