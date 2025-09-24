import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltop from "./pages/Scrolltop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Layout from "./components/common/Layout";
import VendorPage from "./pages/Vendor/VendorPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Scrolltop />
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />

            <Route
              path="/vendorstorefront"
              element={
                <ErrorBoundary>
                  <VendorPage />
                </ErrorBoundary>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
