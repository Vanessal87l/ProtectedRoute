import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Login from "./login";
import Profile from "./profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><div>Home Page</div></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
