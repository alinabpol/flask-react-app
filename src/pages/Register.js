import { useEffect, useState } from "react";

const Register = () => {

const [user, setUser] = useState({
    username: "",
    email: "",
    passsword: ""

})
   

const createUser = async (user) => {

    const URL = 'http://localhost:8000/api/v1/user/register'

      await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user),
      })

  }

// handleChange function for form
const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
};

// handle submit function for form
const handleSubmit = (event) => {
    event.preventDefault();
    setUser({
        username: user.name,
        email: user.age,
        password: user.breed
    });
  };
  
  useEffect(() => {
    createUser();
    // eslint-disable-next-line
  }, []);


return (
     <div className="dog-form">
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.breed}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    
      </div>
    ) 

}

export default Register;