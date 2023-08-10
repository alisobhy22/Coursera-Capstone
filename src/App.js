import './App.css';
import Landing from './Pages/Landing';
import BookingPage from './Pages/BookingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
