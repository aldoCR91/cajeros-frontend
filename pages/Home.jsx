import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import axios from "axios";

import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import Button from "@mui/material/Button";

import { UserContext } from "@/context/userContext";
import { CajerosContext } from "@/context/cajerosContext";

function Home() {
  // Get datos del usuario en session
  const { data: session } = useSession();
  const { email} = session.user;

  // Getting contexts
  const {user, setUser} = useContext(UserContext);
  const {cajeros, setCajeros} = useContext(CajerosContext);

  const getUser = () => {
    axios
      .get(`http://127.0.0.1:5000/usuario/${session.user.email}}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Home 28 error en el get de usuarios");
    });
  }

  const getCajeros = () => {
    axios.get(`http://127.0.0.1:5000/cajeros`)
      .then((response)=>{
        setCajeros(response.data);
      .catch((error)=>{
        console.log("Home 37 Error en getCajeros")
      })
    });
  }

  const postCajero = () => {
    axios.post("localhost:5000/cajero", { email })
      .then((res) => {
        getCajeros()
    });
  };

  useEffect(() => {
    // Getting user
    getUser();
    // Getting cajeros
    getCajeros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("40", user);
  console.log("41", cajeros);

  return (
    <>
      home
      {/* <Header />
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
      </div> */}
      {/* <Cajeros cajeros={cajeros} /> */}
    </>
  );
}

export default Home;
