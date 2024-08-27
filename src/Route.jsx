import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Components for webpages
import WebHeader from "./components/webHeader/WebHeader";
import WebFooter from "./components/webFooter/WebFooter";

// Webpages
import Home from "./pages/webpage/home/Home";
import Login from "./pages/webpage/login/Login";
import Register from "./pages/webpage/register/Register";

// Employee Dashboard
import EmpHome from "./pages/dashboard/employee/empHome/EmpHome";

// User Dashboard
import UserHome from "./pages/dashboard/user/UserHome/UserHome";

const WebPageLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <WebHeader />
    {children}
    <WebFooter />
  </>
);

const NoFooterWebPageLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <WebHeader />
    {children}
  </>
);

const DashboardLayout = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <WebPageLayout>
            <Home />
          </WebPageLayout>
        }
      />
      <Route
        path="/login"
        element={
          <NoFooterWebPageLayout>
            <Login />
          </NoFooterWebPageLayout>
        }
      />
      <Route
        path="/registration"
        element={
          <NoFooterWebPageLayout>
            <Register />
          </NoFooterWebPageLayout>
        }
      />
      <Route
        path="/emp-dashboard/*"
        element={
          <DashboardLayout>
            <Routes>
              <Route index element={<EmpHome />} />
            </Routes>
          </DashboardLayout>
        }
      />
      <Route
        path="/user-dashboard/*"
        element={
          <DashboardLayout>
            <Routes>
              <Route index element={<UserHome />} />
            </Routes>
          </DashboardLayout>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
