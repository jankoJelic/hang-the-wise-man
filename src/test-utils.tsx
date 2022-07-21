import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import store from "store/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <Router
        location="/"
        navigator={{
          push: () => {},
          createHref: () => "/",
          replace: () => {},
          go: () => {},
        }}
      >
        {children}
      </Router>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
