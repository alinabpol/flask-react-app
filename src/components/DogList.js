import { Link } from "react-router-dom";


const DogList = ({dogs}) => {

  const deleteDog = async (id) => {
    await fetch(URL + id, {
        method: "DELETE",
    });
    window.location.reload();
  };



    const loaded = () => {
        return (
          <div className="dog-container">
            <h2>Dog Container</h2>
            {dogs.map((dog) => (
                <div clasName="dogs-details" key={dog.id}>
                <h2>Name: {dog.name}</h2>
                <h2>Age: {dog.age}</h2>
                <h2>Breed: {dog.breed}</h2>
                <Link to={`/edit/${dog.id}`} key={dog.id}><button>Edit</button></Link>
                <button onClick={() => deleteDog(dog.id)}>Delete</button>
                </div>
            ))}
          </div>
        ) 
      }
      return dogs ? loaded() : <h1>Loading...</h1>;
    }
    
    export default DogList;
    