import React from "react";
import { useSession } from "next-auth/react";
import Login from "./Login";
import Home from "./Home";


function App({cajeros}) {


  if(session == undefined || null){
    return (<Login  />)
  }
  else {
    return ( <Home cajeros={cajeros} />)
  }
}

export default App;
