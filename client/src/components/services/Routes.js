import { Routes, Route } from "react-router-dom";
import Home from "../Home/Homepage.js";
import FullForm from "../Forms/FullForm.js";
function Allroutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/forms/:id" element={<FullForm />} />

      <Route exact path="/forms/" element={<h>hello</h>} />
    </Routes>
  );
}

export default Allroutes;
