import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventContainer from "./Pages/EventList/EventContainer/EventContainer";
import ScrollToTop from "react-scroll-to-top";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Pages
import FrontPage from "./Pages/FrontPage/Frontpage";
import About from "./Pages/About/About";
import AddEvent from "./Pages/AddEvent/AddEvent";
import EventList from "./Pages/EventList/EventList/EventList";
import EventDetails from "./Components/Events/EventDetailsPage/EventDetails";

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
            <Route path="/EventList" element={<EventContainer />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/edit" element={<EventList />} />
          </Routes>
          <ScrollToTop smooth />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
