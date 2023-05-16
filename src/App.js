import "./App.scss";
import HomePage from "./pages/HomePage";
import useTheme from "./hooks/useTheme";
import { Route, Routes } from "react-router-dom";
import CareerList from "./pages/CareerList";
import CareerAbout from "./pages/CareerAbout";
import CareerBlog from "./pages/CareerBlog";
import CareerBLogDetails from "./pages/CareerBLogDetails";
import CareerContact from "./pages/CareerContact";
import CareerDetails from "./pages/CareerDetails";
import CareerCart from "./pages/CareerCart";




function App() {
  const isDark = useTheme()

  return (
    <div className={isDark ? "dark" : ''}>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/CareerList" element={<CareerList/>} />
        <Route path="/CareerAbout" element={<CareerAbout/>} />
        <Route path="/CareerBlog" element={<CareerBlog/>} />
        <Route path="/CareerBLogDetails" element={<CareerBLogDetails/>} />
        <Route path="/CareerContact" element={<CareerContact/>} />
        <Route path="/CareerDetails" element={<CareerDetails/>} />
        <Route path="/CareerCart" element={<CareerCart/>} />
      </Routes>
    </div>
  );
}

export default App;
