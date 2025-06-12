import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventContainer from "./Pages/EventList/EventContainer/EventContainer";
import ScrollToTop from "react-scroll-to-top";
import FrontPage from "./Pages/FrontPage/Frontpage";
import About from "./Pages/About/About";
import AddEvent from "./Pages/AddEvent/AddEvent";

import EventList from "./Pages/EventList/EventList/EventList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EventDetails from "./Components/Events/EventDetailsPage/EventDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/Events" element={<EventContainer />} />
            <Route path="/AddEvent" element={<AddEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/edit" element={<EventList />} />
          </Routes>
          <ScrollToTop smooth />
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
