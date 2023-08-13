import React from "react";
import { useSession } from "next-auth/react";
import Login from "./Login";
import Home from "./Home";


function App() {

  const { data: session } = useSession();

  if(session == undefined || null){
    return (<Login  />)
  }
  else {
    return ( <Home />)
  }
}

export default App;
