import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TopBar from "./topBar/TopBar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single';
import Write from './pages/wite/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import{BrowserRouter , Routes,Route, Link } from "react-router-dom";


function App() {
  const user = false;

  return(
    <BrowserRouter>
    <TopBar />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/login" element={user? <Home/> :<Login />} />
      <Route  path="/register" element={user ? <Home/> :<Register />} />
      <Route  path="/write" element={user? <Write/>: <Register/>} />
      <Route  path="/settings" element={user? <Settings/>: <Register/>} />
      <Route  path="/post/:postId" element={<Single />} />


    </Routes>
    
  </BrowserRouter>
  );
  
}



export default App;


// import React from 'react';
// import TopBar from "./topbar/TopBar.jsx";
// import Home from "./header/pages/Home.jsx";
// import Single from './header/pages/single/Single.jsx';
// import Write from './header/pages/write/Write.jsx';
// import Settings from './header/pages/settings/Settings.jsx';
// import Login from './header/pages/login/Login.jsx';
// import Register from './header/pages/register/Register.jsx';
// import{BrowserRouter , Routes,Route, Link } from "react-router-dom";


// function App() {
//   const user = false;
//   return(
//     <BrowserRouter>
//     <TopBar />

//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route  path="/login" element={user? <Home/> :<Login />} />
//       <Route  path="/register" element={user ? <Home/> :<Register />} />
//       <Route  path="/write" element={user? <Register />: <Write/>} />
//       <Route  path="/settings" element={user? <Settings/>: <Register/>} />
//       <Route  path="/post/:postId" element={<Single />} />


//     </Routes>
    
//   </BrowserRouter>
//   );
  
// }

// export default App;
