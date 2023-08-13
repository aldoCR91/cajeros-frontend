const { createContext, useState } = require("react");

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initialState = {
    user: {}
  };

  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
