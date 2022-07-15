import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import UpdateMovie from "./Components/UpdateMovie";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/addmovies" element={<AddMovies />} />
        <Route path="/updatemovie/:movieId" element={<UpdateMovie/>} />
      </Routes>
    </div>
  );
}

export default App;
