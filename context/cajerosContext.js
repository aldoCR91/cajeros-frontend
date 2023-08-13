const { createContext, useState } = require("react");

export const CajerosContext = createContext();

export const CajerosProvider = ({ children }) => {

  const initialState = {
    cajeros: [],
  };

  const [cajeros, setCajeros] = useState(initialState);

  return (
    <CajerosContext.Provider value={{ cajeros, setCajeros }}>
      {children}
    </CajerosContext.Provider>
  );
};
