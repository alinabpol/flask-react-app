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

  const deleteDog = async (id) => {
    // make post request to create people
    await fetch(URL + id, {
        method: "DELETE",
    });
    window.location.reload();
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
                <div clasName="dogs-details" key={dog.id}>
                <h2>Name: {dog.name}</h2>
                <h2>Age: {dog.age}</h2>
                <h2>Breed: {dog.breed}</h2>
                <button>Edit</button>
                <button onClick={() => deleteDog(dog.id)}>Delete</button>
                </div>
            ))}
          </div>
        ) 
      }
      return dogs ? loaded() : <h1>Loading...</h1>;
    }
    
    export default DogList;
    