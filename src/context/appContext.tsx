import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type Context = {
  playerName: string;
  gameDuration: number;
  modal: {
    visible: boolean;
    title: string;
    description: string;
  };
  setAppState: Dispatch<SetStateAction<Context>>;
};

type Props = {
  children: React.ReactNode;
};

const initialState: Context = {
  playerName: "",
  gameDuration: 0,
  modal: {
    visible: false,
    title: "",
    description: "",
  },
  setAppState: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const appContext = createContext<Context>(initialState);

const AppProvider = ({ children }: Props): JSX.Element => {
  const [appState, setAppState] = useState(initialState);

  return (
    <appContext.Provider value={{ ...appState, setAppState }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
