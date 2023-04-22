import { Routes, Route } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { User } from "./pages/User";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}