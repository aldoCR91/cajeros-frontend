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

  const {user, setUser} = useContext(UserContext);
  const {cajeros, setCajeros} = useContext(CajerosContext);

  useEffect(() => {
    console.log(user);
    console.log(cajeros);
    axios
      .get(`http://127.0.0.1:5000/usuario/${session.user.email}}`)
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log("Home 28");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateCajero = () => {
    axios.post("localhost:5000/cajero", { email }).then((res) => {
      console.log("53");
    });
  };

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
            onClick={handleCreateCajero}
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
