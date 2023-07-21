import { Inter } from "next/font/google";
import App from "./App";




const inter = Inter({ subsets: ["latin"] });


export default function Home({cajeros}) {
  return <main>
    <App cajeros={cajeros}/>
  </main>;
}


export async function getServerSideProps(context){
  
  const res = await fetch("http://127.0.0.1:5000/cajeros");
  const cajeros = await res.json();

  return{
    props: {
      cajeros
    }
  }
}
