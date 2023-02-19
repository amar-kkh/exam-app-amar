// import logo from './logo.svg';
import './App.css';
import {
  Routes, Route
} from "react-router-dom";
import Login from "./page/Login";
import Home from './page/Home';
import { useState } from 'react';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home user={user}/>
  //   },
  //   {
  //     path: "/sign-in",
  //     element: <Login setUser={setUser}/>
  //   }
  // ])
  const [user, setUser] = useState({})
  return (
    <>
    <Routes>
      <Route exact path="/" element={ <Home user={user}/> } />
      <Route exact path="/sign-in" element={ <Login setUser={setUser}/> } />
    </Routes>
    </>
  );
}

export default App;
