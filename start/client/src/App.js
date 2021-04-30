import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import AnimalPage from "./pages/AnimalPage/AnimalPage";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage} />
            <Route
              exact
              strict
              path="/products/:slug"
              component={CategoryPage}
            />
            <Route exact strict path="/product/:slug" component={AnimalPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
