import { useState } from "react";

function NewForm(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    age: 0,
    breed: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createDog(newForm);
    setNewForm({
        name: "",
        age: 0,
        breed: "",
    });
  };

  return (
    <section>
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
          placeholder="iage"
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
    </section>
  );
}

export default NewForm;
