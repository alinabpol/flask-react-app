import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


import Index from "../pages/Index";
import NewForm from "../pages/NewForm";
import Edit from "../pages/Edit";

const Main = () => {

const [dogs, setDogs] = useState([
  { 
  name: '', 
  age: 0, 
  breed: '' 
}
])

console.log("dogs in main", dogs)
const URL = 'http://localhost:8000/api/v1/dogs/'


const getDogs = async () => {

  const response = await fetch(URL);

  const data = await response.json();

  console.log("here is data:", data);
  setDogs(data.data);
};

useEffect(() => {
  getDogs();
  // eslint-disable-next-line
}, []);



  
return (
    <main>
      <Routes>
        <Route exact path="/" element={<Index dogs={dogs} setDogs={setDogs}/>} />
        <Route exact path="/form" element={<NewForm/>} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </main>
  )   
};

export default Main;

