import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import Reviews from "./components/Reviews";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0Provider";

const App = () => {

    return (
      <Router>
      <Auth0ProviderWithHistory>
        
        <div>
          <Navbar/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/jobs" component={Homepage} />
        </div>
      </Auth0ProviderWithHistory>
      </Router>
    )
}

export default App;