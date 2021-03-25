import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/Search/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* ... */}
    </div>
  );
}

export default App;
