import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CreateSurfBreakFormPage from "./components/CreateSurfBreakFormPage/CreateSurfBreakForm";
import Map from "./components/Map/Map";
import * as sessionActions from "./store/session";
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
            <Map></Map>
            <CreateSurfBreakFormPage location={location}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;