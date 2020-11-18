import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
// import Header from "./Header/Header.jsx";
import AdminPage from "./Pages/Admin/Admin.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={AdminPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
