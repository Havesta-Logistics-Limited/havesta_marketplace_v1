import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import VendorStoreFront from "./pages/VendorStoreFront";
import Scrolltop from "./pages/Scrolltop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/m"
            element={
              <ErrorBoundary>
                <Marketplace />
              </ErrorBoundary>
            }
          />
          <Route path="/" element={<Ordersummary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;