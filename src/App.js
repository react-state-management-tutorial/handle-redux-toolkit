import {BrowserRouter,Navigate,Route,Routes,} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserInfo from "./pages/UserInfo";
import NotFound from "./pages/NotFound";
import { useSelector } from 'react-redux';
import { selectUserToken } from "./store/userSlice";
import "./style.css";

function Main() {
  const token = useSelector(selectUserToken)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/logout"
          element={token ? <Logout /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/user"
          element={token ? <UserInfo /> : <Navigate to="/login" />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
      <Main />
  );
}
