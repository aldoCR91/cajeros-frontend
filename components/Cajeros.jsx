import Cajero from "./Cajero";

const Cajeros = ({ cajeros }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {cajeros.map((cajero) => (
        <Cajero
          key={cajero[0]}
          id={cajero[0]}
          state={cajero[1]}
          amount={cajero[2]}
        />
      ))}
    </div>
  );
};

export default Cajeros;
