import { useEffect, useState } from "react";

import DogList from "./DogList";

import NewForm from "../pages/NewForm";

function DogContainer(){
    
const [dogs, setDogs] = useState([
    { 
    name: '', 
    age: 0, 
    breed: '' 
  }
])


const URL = 'http://localhost:8000/api/v1/dogs/'


  const getDogs = async () => {

    const response = await fetch(URL);
 
    const data = await response.json();

    console.log("here is data:", data);
    setDogs(data.data);
  };


  const createDog = async (dog) => {

      await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dog),
      })
      getDogs()
  }
  
  const updateDog = async (dog, id) => {

      await fetch(URL + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      });

      getDogs();
    };
    
    const deleteDog = async (id) => {
      // make post request to create people
      await fetch(URL + id, {
          method: "DELETE",
      });
      // update list of people
      getDogs();
    };
  

  useEffect(() => {
    getDogs();
    // eslint-disable-next-line
  }, []);

  const loaded = () => {
    return (
      <div className="dog-container">
       <DogList dogs={dogs}/>
       <NewForm createDog={createDog} updateDog={updateDog} deleteDog={deleteDog}/>
      </div>
    ) 
  }
  return dogs ? loaded() : <h1>Loading...</h1>;
}

export default DogContainer;
