import { Link } from "react-router-dom";


const DogList = ({dogs}) => {

  const deleteDog = async (id) => {
    await fetch(URL + id, {
        method: "DELETE",
    });
    window.location.reload();
  };


  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8000/users/logout", {
        method: "GET"
      });

      if (res.ok) {
        console.log("You have successfully logged out!");
      } else {
        console.error("User logout failed.");
      }
    } catch (error) {
      console.error("Error occurred while logging out:", error);
    }
  };



    const loaded = () => {
        return (
          <div className="dog-container">
            <h1>Your dogs:</h1>
            <div className="index-btns">
            <Link to={`/form`} ><button className="index-btn">Add a new dog</button></Link>
            <Link to={`/register`} ><button className="index-btn">Register</button></Link>
            <Link to={`/login`} ><button className="index-btn">Login</button></Link>
            <Link to={`/`} ><button className="index-btn" onClick={handleLogout}>Logout</button></Link>
            </div>
            {dogs.map((dog) => (
            <div className="dogs-details" key={dog.id}>
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
    