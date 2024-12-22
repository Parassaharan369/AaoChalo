import logo from './logo.svg';
import Front from './front.js';
import Contact from './Contact.js';
import Train from './Train.js';
import Hotels from './hotels.js';
import Visa from './visa.js';
import Flights from './flights.js';
import Blog from './blog.js';
import About from './about.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<div className="App">
      <Front/>
      </div>}/>
      <Route path="/Contact" element={
      <Contact/>}
      />
      <Route path="/Trains" element={
      <Train/>}
      />
      <Route path="/Hotels" element={
      <Hotels/>}
      />
      <Route path="/Visa" element={
      <Visa/>}
      />
      <Route path="/Flights" element={
      <Flights/>}
      />
      <Route path="/Blog" element={
      <Blog/>}
      />
      <Route path="/About" element={
      <About/>}
      />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
