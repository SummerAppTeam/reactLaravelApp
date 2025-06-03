import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import EventContainer from "./Pages/EventList/EventContainer";
import ScrollToTop from "react-scroll-to-top";
import FrontPage from "./Pages/FrontPage/Frontpage";
import About from "./Pages/About/About";
import EventList from "./Pages/EventList/EventList";
import AddEvent from "./Pages/AddEvent/AddEvent";
import DarkModeToggle from "./Components/Header/darkModeToggle";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EventDetails from "./Pages/EventList/EventDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DarkModeToggle />{" "}
        {/*Remember to install DarkModeSwitch from react for this to work*/}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/EventList" element={<EventContainer />} />
            <Route path="/AddEvent" element={<AddEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>

          <div>
            <ScrollToTop smooth />{" "}
            {/*Remember to install scrolltotop from react for this to work*/}
          </div>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
