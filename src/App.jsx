import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import VendorStoreFront from "./pages/Ordersummary";
import Ordersummary from "./pages/Ordersummary";

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