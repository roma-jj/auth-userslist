import React from 'react';
import {render} from "react-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {history} from "./app/store";
import Header from "./components/header";
import Routes from "./routes";


render(
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <>
                  <Header/>
                  <Routes />
              </>
          </ConnectedRouter>
      </Provider>
    , document.getElementById("root")
);
