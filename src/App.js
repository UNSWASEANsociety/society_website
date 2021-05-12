import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import routes from "./constants/routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header links={routes} />
        <Switch>
          {routes.map((route) => {
            if (route.path === "/")
              return null;
            return (
              <Route path={route.path}>
                {route.component}
              </Route>
            );
          })}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
