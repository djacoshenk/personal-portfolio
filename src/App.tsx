import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
