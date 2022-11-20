import Login from "./components/Auth/Login";
import AdminPanel from "./components/AdminPanel";
import MainScreen from "./components/MainScreen";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from "./components/User";
import Signup from "./components/Auth/Signup";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/muiComponents/UserSignup";
import UserProfile from "./components/userProfile";
import ProtectedRoutes from "./ProtectedRoutes"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Login />} /> 
     <Route path="/userlogin" element={<UserLogin />} /> 
     <Route path="/signupUser" element={<UserSignup />} /> 
     <Route path="/signup" element={<Signup/>} />

<Route element={<ProtectedRoutes/>}>

     <Route path="/admin" element={<AdminPanel/>} /> 
     <Route path="user" element={<User/>} /> 
     <Route path="/profile" element={<UserProfile/>} /> 
     <Route path="main" element={<MainScreen />} /> 
     </Route>

      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
