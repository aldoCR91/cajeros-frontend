import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./Login";
import Home from "./Home";



function App() {

  const { data: session } = useSession()
  console.log({session});

  setTimeout(() => {
    
  }, 2000);

  if(session == undefined || null){
    return (<Login  />)
  }
  else {
    return ( <Home />)
  }
}

export default App;
