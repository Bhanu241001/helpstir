// App.jsx
import { useEffect } from "react";
import Nav from "./components/nav.jsx";
import Showreel from "./components/showreel.jsx";
import WhyHelpstir from "./components/whyHelpstir.jsx";
import Helpstirwork from "./components/helpstirwork.jsx";
import HelpstirForEveryone from "./components/helpstirForEveryone.jsx";
import OurSocial from "./components/OurSocial.jsx";
import Partners from "./components/Partners.jsx";
import Team from "./team.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import helpstirWorkLogic from "./components/script.js";
function App() {
  useEffect(() => {
    const cleanup = helpstirWorkLogic();
    return cleanup;
  }, []);
  return (
    <>
      <Nav />
      <Showreel />
      <WhyHelpstir />
      <Helpstirwork />
      <HelpstirForEveryone />
      <OurSocial />
      <Partners />
      <Team />
      <Footer />
    </>
  );
}

export default App;
