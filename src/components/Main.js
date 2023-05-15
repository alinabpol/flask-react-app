import { Route, Routes } from "react-router-dom";

import Index from "../pages/index";
import NewForm from "../pages/NewForm";

const Main = () => {

    <main>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/form" element={<NewForm />} />
    </Routes>
    </main>

    
};

export default Main;

