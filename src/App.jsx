import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import VendorStoreFront from "./pages/VendorStoreFront";
import Scrolltop from "./pages/Scrolltop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Layout from "./components/common/Layout";

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