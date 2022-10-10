// import NavBar from "./components/nav";
 import LoginForm from "./components/loginForm";
 import Dashboard from "./components/dashboard";
import { useState } from "react";


function App() {
  const[showstate,setstate]=useState(true) 

  return (

   <>
     
   {showstate?<LoginForm onclick={()=>setstate(false)}/> :<Dashboard/>}
   </>

  );
}

export default App;
