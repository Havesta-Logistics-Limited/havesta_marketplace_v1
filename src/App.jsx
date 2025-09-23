import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import VendorStoreFront from "./pages/VendorStoreFront";
import Scrolltop from "./pages/Scrolltop";

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
                  <Marketplace />
                </ErrorBoundary>
              }
            />

            <Route
              path="/vendorstorefront"
              element={
                <ErrorBoundary>
                  <VendorStoreFront />
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