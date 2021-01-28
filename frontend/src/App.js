import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import { useDispatch } from 'react-redux';
import CreateSurfBreakFormPage from "./components/CreateSurfBreakFormPage/CreateSurfBreakForm";


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
          <Route path="/surf_breaks/new">
            <CreateSurfBreakFormPage location={location}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;