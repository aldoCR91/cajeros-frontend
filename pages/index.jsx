import { Inter } from "next/font/google";
import App from "./App";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const StateContext = createContext();

export default function Home() {

  const initialState = {
    user: {},
    cajeros: []
  };

  const [state, setState] = useState(initialState);


  return <main>
    <StateContext.Provider value={{state,setState}}>
      <App />
    </StateContext.Provider>
  </main>;
}

