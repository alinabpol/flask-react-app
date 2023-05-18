import { useEffect } from "react";

const DogList = ({dogs, setDogs}) => {

  console.log("dogs in doglist", dogs)
  const URL = 'http://localhost:8000/api/v1/dogs/'


  const getDogs = async () => {

    const response = await fetch(URL);
 
    const data = await response.json();

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
            <h2>Dog Container</h2>
            {dogs.map((dog) => (
                <div clasName="dogs-details">
                <h2>Name: {dog.name}</h2>
                <h2>Age: {dog.age}</h2>
                <h2>Breed: {dog.breed}</h2>
                </div>
            ))}
          </div>
        ) 
      }
      return dogs ? loaded() : <h1>Loading...</h1>;
    }
    
    export default DogList;
    