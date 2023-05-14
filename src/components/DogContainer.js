import { useEffect, useState } from "react";

import DogList from "./DogList";

function DogContainer(){
    
const [dogs, setDogs] = useState([
    { 
    name: '', 
    age: 0, 
    breed: '' 
  }
])


  // Function to get list of Plants
  const getDogs = async () => {
    // make api call and get response
    const response = await fetch('http://localhost:8000/api/v1/dogs/');
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    console.log("here is data:", data);
    setDogs(data.data);
  };

  useEffect(() => {
    getDogs();
    // eslint-disable-next-line
  }, []);

  const loaded = () => {
    return (
      <div className="dog-container">
       <DogList dogs={dogs}/>
      </div>
    ) 
  }
  return dogs ? loaded() : <h1>Loading...</h1>;
}

export default DogContainer;
