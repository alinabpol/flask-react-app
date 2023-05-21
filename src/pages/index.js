import DogContainer from "../components/DogContainer.js"
import '../App.css'

const Index = ({dogs, setDogs}) => {


    return (
     <div>
        <DogContainer dogs={dogs} setDogs={setDogs}/>
     </div>
    )

}

export default Index;
