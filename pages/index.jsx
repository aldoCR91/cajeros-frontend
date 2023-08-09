import { Inter } from "next/font/google";
import App from "./App";
import { useState } from "react";




const inter = Inter({ subsets: ["latin"] });


export default function Home({cajeros,usuarios}) {

  const [data,setData] = useState({
    usuarios
  });

  //console.log(data);

  return <main>
    <App cajeros={cajeros}/>
  </main>;
}


export async function getServerSideProps(context){
  
  const res = await fetch("http://127.0.0.1:5000/cajeros");
  const cajeros = await res.json();

  const users = await fetch("http://127.0.0.1:5000/usuarios")
  const usuarios = await users.json();


  return{
    props: {
      cajeros,
      usuarios,
    }
  }
}
