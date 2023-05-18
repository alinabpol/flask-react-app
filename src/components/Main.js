import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import NewForm from "../pages/NewForm";

const Main = () => {

  
return (
    <main>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/form" element={<NewForm />} />
      </Routes>
    </main>
  )   
};

export default Main;

