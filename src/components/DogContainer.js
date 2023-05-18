import DogList from "./DogList";

const  DogContainer = ({dogs, setDogs}) =>{
    


    return (
      <div className="dog-container">
       <DogList dogs={dogs} setDogs={setDogs}/>
      </div>
    ) 
  }

export default DogContainer;
