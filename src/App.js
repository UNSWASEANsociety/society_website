import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Teams } from "./pages/Teams";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
