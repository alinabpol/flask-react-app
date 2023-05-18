import { useEffect, useState } from "react";
import DogNewForm from "../components/DogNewForm";


const NewForm = () => {
  // state to hold formData

  const [newForm, setNewForm] = useState({
    name: "",
    age: 0,
    breed: "",
});
 
useEffect(() => {
  setNewForm({
    name: "",
    age: 0,
    breed: "",
  });
  // eslint-disable-next-line
}, []);

  return (
    <div>
      <DogNewForm newForm={newForm} setNewForm={setNewForm} name={newForm.name} age={newForm.age} breed={newForm.breed}/>
    </div>

  );
}

export default NewForm;
