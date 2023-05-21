import { useEffect, useState } from "react";

const DogNewForm = () => {
  

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

      
const createDog = async (dog) => {

    const URL = 'http://localhost:8000/api/v1/dogs/'

      await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dog),
      })

  }
    
  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    createDog(newForm);
    setNewForm({
        name: "",
        age: 0,
        breed: "",
    });
  };
  

  useEffect(() => {
    createDog();
    // eslint-disable-next-line
  }, []);



return (
     <div className="dog-form">
      <h2>Create a dog:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.breed}
          name="breed"
          placeholder="breed"
          onChange={handleChange}
        />
        <input type="submit" value="Create Dog" />
      </form>
    
      </div>
    ) 

}

export default DogNewForm;
