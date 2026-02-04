import PhotoSlider from "./components/PhotoSlider";
import "./App.css";
import BackgroundMusic from "./components/BackgroundMusic";
import Letter from "./components/Letter.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Button from "./components/Button.jsx";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Happy Valentine’s Day Love 💖</h1>
                <p>Every picture is a memory I love.</p>
                <PhotoSlider />
                <BackgroundMusic />

                <Link to="/letter">
                  <Button />
                </Link>
              </>
            }
          />

          <Route path="/letter" element={<Letter />} />
        </Routes>
      </Router>
    </div>
  );
}
