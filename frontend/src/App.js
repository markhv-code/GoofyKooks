import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import { useDispatch } from 'react-redux';
import CreateSurfBreakFormPage from "./components/CreateSurfBreakFormPage/CreateSurfBreakForm";
import SurfBreaks from "./components/SurfBreaks/SurfBreaks";
import LandingPage from "./components/LandingPage";


import Navigation from "./components/Navigation";
import location from "./components/Map/Map";

// const { location } = updateLocation();

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreSessionUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/surf_breaks">
            <SurfBreaks/>
          </Route>
          <Route exact path="/surf_breaks/new">
            <CreateSurfBreakFormPage location={location}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;