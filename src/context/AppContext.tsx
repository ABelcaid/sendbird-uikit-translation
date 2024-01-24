import { createContext, useContext, ReactNode, useState } from "react";

interface AppContextProps {
  appId: string;
  userName: string;
  userId: string;
}

interface AppContextProviderProps {
  children: ReactNode;
}

interface AppContextType extends AppContextProps {
  updateContext: (values: Partial<AppContextProps>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const initialState: AppContextProps = {
    appId: "",
    userName: "",
    userId: "",
  };

  const [state, setState] = useState<AppContextProps>(initialState);

  const updateContext = (values: Partial<AppContextProps>) => {
    setState((prevState) => ({ ...prevState, ...values }));
  };

  const contextValue: AppContextType = {
    ...state,
    updateContext,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};

export { AppContextProvider, useAppContext };
