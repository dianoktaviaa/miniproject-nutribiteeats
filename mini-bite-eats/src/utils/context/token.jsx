import {
  createContext,
  useMemo,
  useState,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";

const contextValue = {
  token: "",
  changeToken: () => {},
};

const ThemeContext = createContext(contextValue);

function TokenProvider({ children }) {
  const initialValue = localStorage.getItem("user") ?? "";
  const [token, setToken] = useState(initialValue);

  const changeToken = useCallback((data) => {
    const newData = data ?? "";
    if (data) {
      localStorage.setItem("user", newData);
    } else {
      localStorage.removeItem("user");
    }
    setToken(newData);
  }, []);

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token, changeToken]
  );

  return (
    <ThemeContext.Provider value={tokenContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useToken() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { TokenProvider, useToken };
