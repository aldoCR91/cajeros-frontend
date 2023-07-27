import Header from "@/components/Header";
import Cajeros from "@/components/Cajeros";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

function Home({ cajeros }) {

  const { data: session } = useSession();
  const {email,name,image} = session.user;
 
  const user = {
    name,
    email,
    image,
    rol: "user",
    pin: 1234,
    saldo: 0
  };

  const user_create = async () => {
    const res = await axios.post("http://127.0.0.1:5000/usuarios",user)
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const user_exist = async (email) => {
    let url = `http://127.0.0.1:5000/usuario/show`;
    await axios.post(url,email)
    .then(function(response){
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    user_exist("luis@cuc.cr");
    
  }, [])
  

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
