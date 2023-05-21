import DogContainer from "../components/DogContainer.js"


const Index = ({dogs, setDogs}) => {


    return (
     <div>
        <DogContainer dogs={dogs} setDogs={setDogs}/>
     </div>
    )

}

export default Index;
