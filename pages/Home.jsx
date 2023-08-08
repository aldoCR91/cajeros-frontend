import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

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
        console.log("24", user)
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Home 28", error)
        axios
          .post("http://127.0.0.1:5000/usuarios", user)
          .then((response) => {
            setuser(response.data);
          })
          .catch((error) => {
            console.error("Error al registrar usuario en DB:");
          });
      });
  }, []);

  //user_exist(user.email)

  return (
    <>
      <Header />
      <div className="row h-5 w-full"></div>
      <Cajeros cajeros={cajeros} />
    </>
  );
}

export default Home;
