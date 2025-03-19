import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Patient from "./Route/Patient";
import Therapist from "./Route/Therapist";
import Common from "./Route/Common";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Common />} />

    
        <Route path="/user/*" element={<Patient />} />

       
        <Route path="/therapist/*" element={<Therapist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
