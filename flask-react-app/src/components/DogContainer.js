import {useState } from "react";


function DogContainer(){
    
const [dogs, setDogs] = useState([
    { name: 'Sky', age: 5, breed: 'Labrador Retriever' },
    { name: 'Ester', age: 1, breed: 'German Shepherd' },
    { name: 'Charlie', age: 2, breed: 'Golden Retriever' }
])


  const loaded = () => {
    return (
      <div className="dog-container">
        <h2>Dog Container</h2>
        {dogs.map((dog) => (
            <div clasName="dogs-details">
            <h2>{dog.name}</h2>
            <h2>{dog.age}</h2>
            <h2>{dog.breed}</h2>
            </div>
        ))}
      </div>
    ) 
  }
  return dogs ? loaded() : <h1>Loading...</h1>;
}

export default DogContainer;
