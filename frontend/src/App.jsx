import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "react-scroll-to-top";

import FrontPage from "./Pages/FrontPage/Frontpage";
import About from "./Pages/About/About";
import EventList from "./Pages/EventList/EventList";
import AddEvent from "./Pages/AddEvent/AddEvent";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/EventList" element={<EventList />} />
          <Route path="/AddEvent" element={<AddEvent />} />
        </Routes>
        <p>This is the main content</p>
            <div>
      <ScrollToTop smooth />
    </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
