
import { useContext, useEffect } from "react";
import { StateContext } from "../pages/index";

import Cajero from "./Cajero";
import axios from "axios";


const Cajeros = () => {

  const {state} = useContext(StateContext);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {state.cajeros.map((cajero) => (
        <Cajero
          key={cajero[0]}
          id={cajero[0]}
          state={cajero[1]}
          amount={cajero[2]}
          user_id={cajero[3]}
        />
      ))}
    </div>
  );
};

export default Cajeros;
