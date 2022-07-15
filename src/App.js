import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/addmovies" element={<AddMovies />} />
      </Routes>
    </div>
  );
}

export default App;
