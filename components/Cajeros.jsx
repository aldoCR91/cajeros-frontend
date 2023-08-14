
import { useContext, useEffect } from "react";
import { StateContext } from "../pages/index";

import Cajero from "./Cajero";
import axios from "axios";


const Cajeros = () => {

  const {state, setState} = useContext(StateContext);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/cajeros')
      .then((res)=>{
        setState(...state, state.cajeros = res.data);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  console.log(state.cajeros);
 
  

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {cajeros.map((cajero) => (
        <Cajero
          key={cajero[0]}
          id={cajero[0]}
          state={cajero[1]}
          amount={cajero[2]}
        />
      ))}
    </div>
  );
};

export default Cajeros;
