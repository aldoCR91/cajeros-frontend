import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import Button from "@mui/material/Button";
import { StateContext } from "../pages/index";


function Home() {
  // Get datos del usuario en session
  const { data: session } = useSession();
  const { email } = session.user;

  // Context
  const { state, setState } = useContext(StateContext);

  // Loadings
  const [isCajerosLoading, setCajerosLoading] = useState(true);
  const [isUserLoading, setUserLoading] = useState(true);

  const postCajero = ()=>{
    axios.post('http://127.0.0.1:5000/cajero',{email})
  }

  const [contador, setContador] = useState(0);
  

  //Registrar usuario
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/cajeros")
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          cajeros: response.data,
        }));
        setCajerosLoading(false);
        //console.log(state)
      })
      .catch((error) => {
        console.log("Home 31 get cajeros", error);
      });

    axios
      .post(`http://127.0.0.1:5000/usuario`, {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        rol: "user",
        pin: 1234,
        saldo: 0,
      })
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          user: response.data,
        }));
        setUserLoading(false);
        //console.log(state);
      })
      .catch((error) => {
        console.log("Home 48 post usuarios", error);
      });

      setTimeout(() => {
        setContador(contador => contador+=1);
        console.log("actualizando datos")
      }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contador]);

  if (isUserLoading) return <p>Cargando datos del usuario...</p>;
  if (isCajerosLoading) return <p>Cargando datos de cajeros...</p>;
  if (!state.user) return <p>No hay datos del usuario</p>;
  if (!state.cajeros) return <p>No hay datos del cajero</p>;

  return (
    <>
      <Header />
      {state.user.rol == "admin" && (
        <div className="row h-10 w-full bg-slate-200 content-center justify-center">
          <div className="h-8">
            <Button
              variant="text"
              color="primary"
              className="border cursor-pointer"
              onClick={postCajero}
            >
              Agregar cajero
            </Button>
          </div>
        </div>
      )}
      {
        state.cajeros.length > 0
          ? (<Cajeros cajeros={state} />)
          : (<p>No hay datos del cajero</p>)
      }
    
      {/* <Cajeros cajeros={state.cajeros} /> */}
    </>
  );
}

export default Home;
