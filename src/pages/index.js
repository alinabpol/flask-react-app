import DogContainer from "../components/DogContainer.js"
import { useState, useEffect } from "react";

const Index = () => {

    const [dogs, setDogs] = useState([
        { 
        name: '', 
        age: 0, 
        breed: '' 
      }
    ])
    
    useEffect(() => {
        setDogs();
        // eslint-disable-next-line
      }, []);

    return (
     <div>
        <DogContainer dogs={dogs} setDogs={setDogs}/>
     </div>
    )

}

export default Index;
