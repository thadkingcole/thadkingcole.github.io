import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import desired icons from font awesome for use anywhere in the app
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faEnvelopeOpenText,
  faPhoneSquare,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faFilePdf, faEnvelopeOpenText, faPhoneSquare, faLaptopCode);

function App() {
  return (
    <>
      <Header />
      <main className="my-5">
        <Switch>
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
