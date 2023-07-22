import Image from "next/image";
import image from "./atm.png";
import CurrencyFormat from "react-currency-format";

export default function Cajero({ id, state, amount }) {

    let aux = state;

    if(state == "disponible"){
        aux = "bg-green-500";
    } else 
    if(state == "Ocupado"){
        aux = "bg-red-500";
    } else
    if(state == "mantenimiento"){
        aux = "bg-yellow-400";
    }


  return (
    
    <div>
      <div className={`relative flex flex-col m-5 bg-white z-30 p-10`}>
      <p className="absolute top-2 text-xs italic text-gray-400">
          Cajero: {`${" " + id}`}
        </p>
        <p className="absolute top-2 right-8 text-xs italic text-gray-400">
          Disponible: {" "}
          <CurrencyFormat value={amount} displayType={"text"} prefix="₡" />
        </p>
        <Image
          width={100}
          height={100}
          className="mx-auto"
          src={image}
          alt="title"
          objectFit="contain"
        />
        <h4 className="mt-4 text-gray-500">{state}</h4>

        <p className="text-xs my-2 line-clamp-2">Disponible: {amount}</p>

        <button
          className={`mt-auto button ${aux} h-10 text-white rounded-xl`}
        >
          {state}
        </button>
      </div>
    </div>
  );
}
