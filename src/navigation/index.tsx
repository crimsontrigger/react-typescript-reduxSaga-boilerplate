import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const HomeScreen = lazy(() => import("../screens/HomeScreen"));

const Main = () => (
  <Suspense fallback={<Loading />}>
    <div style={{ width: "100%" }}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </div>
  </Suspense>
);

export default Main;
