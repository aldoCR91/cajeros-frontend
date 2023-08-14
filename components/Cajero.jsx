import Image from "next/image";
import image from "./atm.png";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { StateContext } from "../pages/index";
import axios from "axios";

export default function Cajero({ id, state, amount }) {


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
        <h4 className="mt-4 text-gray-500">{state}</h4>

        <div className="">
          <div
            className={`button bg-yellow-600 h-10 text-white p-2 rounded-xl text-center`}
          >
            <Link href={"/CajeroMain"}>Editar</Link>
          </div>
          <div
            className={`button bg-red-600 h-10 text-white p-2 rounded-xl text-center`}
          >
            <Link href={"/CajeroMain"}>Eliminar</Link>
          </div>
          <div
            className={`button bg-green-600 h-10 text-white p-2 rounded-xl text-center`}
          >
            <Link href={`/CajeroMain?id=${id}`}>Disponible</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
