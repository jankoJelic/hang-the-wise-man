import React, { createContext, useState } from "react";

type Context = {
  playerName: string;
  modal: {
    visible: boolean;
    title: string;
    description: string;
  };
  setAppState: (value: Context) => void;
};

type Props = {
  children: React.ReactNode;
};

const initialState: Context = {
  playerName: "",
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

  const setContext = (value: Context) => setAppState(value);

  return (
    <appContext.Provider value={{ ...appState, setAppState: setContext }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
