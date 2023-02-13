import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "",
  });
  return (
    <stateContext.Provider
      value={{
        setSnackbar,
        snackbar,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
