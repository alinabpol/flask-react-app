import DogNewForm from "../components/DogNewForm";
import '../App.css'

const NewForm = ({newForm, setNewForm, name, age, breed}) => {
  // state to hold formData


  return (
    <div>
      <DogNewForm newForm={newForm} setNewForm={setNewForm} name={name} age={age} breed={breed}/>
    </div>

  );
}

export default NewForm;
