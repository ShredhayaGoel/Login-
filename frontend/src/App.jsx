import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import NewPassword from "./pages/newpassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
