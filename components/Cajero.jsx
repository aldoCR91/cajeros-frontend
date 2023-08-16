import Image from "next/image";
import image from "./atm.png";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../pages/index";
import axios from "axios";
import { useRouter } from 'next/router'

export default function Cajero({ id, state, amount, user_id }) {

  const router = useRouter();

  const handleCajeroOcupado = () => {
    alert(`Este cajero esta ocupado por ${user_id}`)
  }

  const [actualizando,setActualizando] = useState(false);
  const [nuevoDisponible, setNuevoDisponible] = useState(1);

  const actualizarCajero = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:5000/cajero/amount/${id}`,{amount: nuevoDisponible});
  }

  const handleEditarCajero = ()=>{
    setActualizando(!actualizando)
    console.log(actualizando)
  }

  const handleEliminar = () => {
    axios.delete(`http://127.0.0.1:5000/cajero/${id}`)
    
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
            <button onClick={handleEditarCajero}>Editar</button>
          </div>
          {
            (actualizando)
              ? (
                <div>
                  <form onSubmit={actualizarCajero}>
                    <label>Ingrese el nuevo disponible
                      <input
                        type="number"
                        min={1}
                        value={nuevoDisponible}
                        onChange={(e) => setNuevoDisponible(e.target.value)}
                        className="ml-4 bg-transparent rounded-lg my-2"
                        />
                    </label>
                    <input value="Actualizar" className="cursor-pointer" type="submit"/>
                  </form>
                </div>
              )
              : (
                <div>
                  <div
                    
                    className={`button bg-red-600 h-10 text-white p-2 rounded-xl text-center mt-2`}
                  >
                    <button onClick={handleEliminar}>Eliminar</button>
                  </div>
                </div>
              )
          }
          
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
