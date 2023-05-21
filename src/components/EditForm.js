import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const EditForm = ()  => {

    const [editForm, setEditForm] = useState({
        name: "",
        age: 0,
        breed: ""
      });
    
    const params = useParams();
    const id = params.id;
    const URL = `http://localhost:8000/api/v1/dogs/${id}`;


    const fetchDog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
        setEditForm(data.data);
    };

    useEffect(() => {
        fetchDog();
    }, [id]);


     
   // handleChange function for form
   const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

    
    console.log("dogs on edit page", editForm)

    
      // handle submit function for form
      const handleSubmit = (event) => {
        event.preventDefault();
        updateDog(editForm);
        setEditForm({
            name: editForm.name,
            age: editForm.age,
            breed: editForm.breed
        });
      };
      
    
  
    const updateDog = async () => {
        const updatedDog = { ...editForm, id: id };
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDog)
    });
};

    
    
        
return (
    <div className="dog-form">
        <form onSubmit={handleSubmit}>
            <input
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder={editForm.name}
                  onChange={handleChange}
                />
            <input
                  type="number"
                  value={editForm.age}
                  name="age"
                  placeholder={editForm.age}
                  onChange={handleChange}
                />
            <input
                  type="text"
                  value={editForm.breed}
                  name="breed"
                  placeholder={editForm.breed}
                  onChange={handleChange}
                />
            <input type="submit" value="Submit" />
        </form>
            
    </div>
    )      
}

export default EditForm