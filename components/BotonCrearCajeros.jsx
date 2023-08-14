const { Button } = require("@mui/material");

import React from "react";

function BotonCrearCajeros(postCajero) {
  return (
    <div className="row h-10 w-full bg-slate-200 content-center justify-center">
      <div className="h-8">
        <Button
          variant="text"
          color="primary"
          className="border cursor-pointer"
          onClick={postCajero}
        >
          Agregar cajero
        </Button>
      </div>
    </div>
  );
}

export default BotonCrearCajeros;
