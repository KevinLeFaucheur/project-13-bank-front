import { Routes, Route } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { Transactions } from "./pages/Transactions";
import { Accounts } from "./pages/Accounts";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<User />} >
        <Route path="profile" element={<Accounts />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}