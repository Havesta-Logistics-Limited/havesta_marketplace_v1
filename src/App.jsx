import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltop from "./pages/Scrolltop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Layout from "./components/common/Layout";
import VendorPage from "./pages/Vendor/VendorPage";
import Home from "./pages/Home/Home";

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c20c139 (FIXING CONFLICTS)
    <ErrorBoundary>
      <Router>
        <Scrolltop />
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ErrorBoundary>
<<<<<<< HEAD
                  <Home />
=======
                  <Marketplace />
>>>>>>> c20c139 (FIXING CONFLICTS)
                </ErrorBoundary>
              }
            />

            <Route
              path="/vendorstorefront"
              element={
                <ErrorBoundary>
<<<<<<< HEAD
                  <VendorPage />
=======
                  <VendorStoreFront />
>>>>>>> c20c139 (FIXING CONFLICTS)
                </ErrorBoundary>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
<<<<<<< HEAD
=======
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
>>>>>>> 8373415 (feat: add order summary screen)
=======
>>>>>>> c20c139 (FIXING CONFLICTS)
  );
}

export default App;
