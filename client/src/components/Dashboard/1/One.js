import React from "react";

// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Blue from "./Blue";
import Red from "./Red";

export default function One() {
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1];
  // const { type } = useParams();
  const { path } = useRouteMatch();
  return (
    <div>
      <h2>One</h2>
      <Switch>
        <Route path={`${path}/red`}>
          <Red />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>
    </div>
  );
}
