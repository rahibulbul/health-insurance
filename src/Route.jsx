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

// Components from emp dashboard
import EmpHeader from "./components/empHeader/EmpHeader";
import EmpSidebar from "./components/empSidebar/EmpSidebar";

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
    <EmpHeader />
    <EmpSidebar />
    {children}
  </>
);

const EmpDashboardLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <div className="dashboard-layout">
      <EmpHeader />
      <div className="dashboard-content">
        <EmpSidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
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
        path="/empDashboard/*"
        element={
          <EmpDashboardLayout>
            <Routes>
              <Route index element={<EmpHome />} />
            </Routes>
          </EmpDashboardLayout>
        }
      />
      <Route
        path="/userDashboard/*"
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
