// import NavBar from "./components/nav";
 import LoginForm from "./components/loginForm";
 import Dashboard from "./components/dashboard";
import { useState } from "react";
// import AddressForm from "./components/addressForm";

function App() {
  const[showstate,setstate]=useState(true) 

  return (
    <div >
     {/* <AddressForm/> */}
     {showstate?<LoginForm onclick={()=>setstate(false)}/> :<Dashboard/>}
    </div>
  );
}

export default App;
