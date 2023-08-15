import Image from "next/image";
import image from "./atm.png";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { StateContext } from "../pages/index";
import axios from "axios";
import { useRouter } from 'next/router'

export default function Cajero({ id, state, amount, user_id }) {

  const router = useRouter();

  const handleCajeroOcupado = () => {
    alert(`Este cajero esta ocupado por ${user_id}`)
  }

  const handleEliminar = () => {
    axios.delete(`http://127.0.0.1:5000/cajero/${id}`)
    router.push('/Home');
  }

  return (
    <div>
      <div className={`relative flex flex-col m-5 bg-white z-30 p-10`}>
        <p className="absolute top-2 text-xs italic text-gray-400">
          Cajero: {`${" " + id}`}
        </p>
        <p className="absolute top-2 right-8 text-xs italic text-gray-400">
          Disponible:{" "}
          <CurrencyFormat value={amount} displayType={"text"} prefix="₡" />
        </p>
        <Image
          width={100}
          height={100}
          className="mx-auto"
          src={image}
          alt="title"
          // objectFit="contain"
        />
      

        <div className="">
          <div
            className={`button bg-yellow-600 h-10 text-white p-2 rounded-xl text-center mt-2`}
          >
            <Link href={"/CajeroMain"}>Editar</Link>
          </div>
          <div
            onClick={handleEliminar}
            className={`button bg-red-600 h-10 text-white p-2 rounded-xl text-center mt-2`}
          >
            <Link href={"/CajeroMain"}>Eliminar</Link>
          </div>
          {
            (state == "Disponible")
              ? (
                <div
                  className={`button bg-green-600 h-10 text-white p-2 rounded-xl text-center mt-2`}
                >
                  <Link href={`/CajeroMain?id=${id}`}>Disponible</Link>
                </div>
              )
              : (
                <div
                  onClick={handleCajeroOcupado}
                  className={`button cursor-pointer bg-gray-500 h-10 text-white p-2 rounded-xl text-center mt-2`}
                >
                  {state}
                </div>
              )
          }
          
          
        </div>
      </div>
    </div>
  );
}
