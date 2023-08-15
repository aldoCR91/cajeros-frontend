import React from "react";

function Retiros({setOpt}) {

  const handleRegresar = () => {
    setOpt("menu");
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-center text-white">
        <div className={`flex h-96 w-11/12 bg-slate-950 rounded-lg`}>
          <div className="col flex-1 h-16 mt-8">
            <div
              className="h-16 pl-8 cursor-pointer hover:text-lg hover:text-yellow-200"
              onClick={handleRegresar}
            >
              Regresar
            </div>
            {/* <div
              className="h-16 pl-8 cursor-pointer hover:text-lg hover:text-yellow-200"
              onClick={handleDepositos}
            >
              Depositos
            </div> */}
          </div>
          <div className="col flex-1 h-16 text-right mt-8">
            {/* <div
                className="h-16 pr-8 cursor-pointer hover:text-lg hover:text-yellow-200"
                onClick={handleDepositos}
              >
                Transferencias
              </div> */}
            {/* <div
              className="h-16 pr-8 cursor-pointer hover:text-lg hover:text-yellow-200"
              onClick={handleSaldo}
            >
              Consulta de saldo
            </div> */}
            {/* <div
                className="h-16 pr-8 cursor-pointer hover:text-lg hover:text-yellow-200"
                onClick={handleDepositos}
              >
                Historial
              </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className={`h-64 w-11/12`}>
          <div className="col space-y-4">
            <div className="flex justify-around items-center row h-16">
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                1
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                2
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                3
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-red-600 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2 bg-red-500">
                Cancelar
              </div>
            </div>
            <div className="flex justify-around items-center row h-16">
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                4
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                5
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                6
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-yellow-600 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2 bg-yellow-500">
                Borrar
              </div>
            </div>
            <div className="flex justify-around items-center row h-16">
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                7
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                8
              </div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                9
              </div>
              <div className="flex-1 text-center font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2"></div>
            </div>
            <div className="flex justify-around items-center row h-16">
              <div className="flex-1 text-center font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2"></div>
              <div className="flex-1 text-center cursor-pointer hover:bg-slate-300 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2">
                0
              </div>
              <div className="flex-1 text-center font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2"></div>
              <div className="flex-1 text-center cursor-pointer hover:bg-green-600 font-bold text-xl  h-16 border border-slate-900 rounded-lg shadow-lg p-4 m-2 bg-green-500">
                Aceptar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retiros;
