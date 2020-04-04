import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

import Error from "./components/error";
import Loader from "./components/loader/index";
import Header from "./components/header/index";

import useCoronavirusApi from "./hooks/useResponse";
import Routes from "./routes";

export default function App() {
  const { useResponse, isError, isLoading } = useCoronavirusApi();

  return (
    <>
      <Router>
        {isLoading && <Loader />}
        {isError && <Error />}
        {!isError && !isLoading && useResponse && (
          <>
            <Header>
              <Routes value={useResponse} />
            </Header>
          </>
        )}
      </Router>
    </>
  );
}
