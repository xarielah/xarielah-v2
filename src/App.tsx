import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/main-layout";
import { Home, About, Portfolio, Work, Contact } from "./pages/";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <MainLayout>
      <Routes key={location.pathname} location={location}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        {/* Navigates defaultly to /home */}
        <Route path="*" element={<Navigate to={"/home"} />} />{" "}
      </Routes>
    </MainLayout>
  );
}

export default App;
