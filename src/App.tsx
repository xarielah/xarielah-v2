import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/main-layout";
import { Home, About, Portfolio, Work, Contact } from "./pages/";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

function App() {
  const location = useLocation();
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

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
