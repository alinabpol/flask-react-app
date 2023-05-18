const DogNewForm = ({newForm, setNewForm, name, age, breed}) => {
  
      
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
  
const updateDog = async (dog, id) => {

      await fetch(URL + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      });
};
    

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
  

//   useEffect(() => {
//     getDogs();
//     // eslint-disable-next-line
//   }, []);



    return (
      <div className="dog-form">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="text"
          value={breed}
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
