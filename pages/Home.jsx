
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import Button from "@mui/material/Button";


function Home({ cajeros }) {
  const { data: session } = useSession();
  const { email, name, image } = session.user;

  

  const [user, setUser] = useState({
    name,
    email,
    image,
    rol: "user",
    pin: 1234,
    saldo: 0,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/usuario/${user.email}`)
      .then((response) => {
        console.log("24", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Home 28");
        axios
          .post("http://127.0.0.1:5000/usuarios", user)
          .then((response) => {
            setuser(response.data);
            console.log("Home 42", user);
          })
          .catch((error) => {
            console.log("Home 43");
            console.error("Error al registrar usuario en DB:");
          });
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
      <Header saldo={user.saldo} />
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
      </div>
      <Cajeros cajeros={cajeros} />
    </>
  );
}

export default Home;
