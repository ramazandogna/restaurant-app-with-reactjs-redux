import { react } from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUptadeProduct from "../products/AddOrUptadeProduct";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/product" component={Dashboard} />
        <Route
          exact
          path="/saveproduct/:productId"
          component={AddOrUptadeProduct}
        />
        <Route exact path="/cart" component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
