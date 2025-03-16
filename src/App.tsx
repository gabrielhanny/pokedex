import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Search from "./Pages/SearchPage";
import MyPokemonPage from "./Pages/MyPokemonPage";
import ToastNotification from "./Components/Toast/Toast";

function App() {
  return (
    <>
      <ToastNotification />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypokemon" element={<MyPokemonPage />} />
      </Routes>
    </>
  );
}

export default App;
