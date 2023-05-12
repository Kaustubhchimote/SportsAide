import { memo } from "react";
import type { FC } from "react";

import classes from "./App.module.css";
// import resets from "./components/_resets.module.css";
import { Home } from "./components/Home/Home";
import { Football } from "./components/Football/Football";
import { Events } from "./components/Events/Events";
import { Cricket } from "./components/Cricket/Cricket";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Signup } from "./components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root}`}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
});
