import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import routes from "./constants/routes";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Gill Sans",
      // "Bodoni 72",
    ].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Header links={routes} />
          <Switch>
            {routes.map((route) => {
              if (route.path === "/") return null;
              return <Route path={route.path}>{route.component}</Route>;
            })}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
