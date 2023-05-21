import {  useState } from "react";

const Login = () => {

const [loginUser, setLoginUser] = useState({
    username: "",
    password: ""

})
   
// handleChange function for form
const handleChange = (event) => {
  setLoginUser({ ...loginUser, [event.target.name]: event.target.value });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const res = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginUser)
    });

    if (res.ok) {
      console.log("You have successfully logged in!");

    } else {
      console.error("User login failed.");

    }
  } catch (error) {
    console.error("Error occurred while logging in:", error);

  }
};

return (
     <div className="login-form">
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={loginUser.name}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          value={loginUser.breed}
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