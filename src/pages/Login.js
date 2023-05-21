import { useEffect, useState } from "react";

const Login = () => {

const [user, setUser] = useState({
    username: "",
    password: ""

})
   
// handleChange function for form
const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
};

// handle submit function for form
const handleSubmit = (event) => {
    event.preventDefault();
  };

try {
  const res = async (user) => {

    const URL = 'http://localhost:8000/user/login'

      await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user),
      })

  }
  if (res){
  console.log("You have succesfully logged in!")

} else {

  console.error("User login failed")
}      
} catch (error) {
  console.error("Error occurred while logging in:", error);
  // Handle the error appropriately
}


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

export default Login;