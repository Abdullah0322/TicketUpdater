
import CreateTicket from "./pages/Createticket";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Email from "./pages/Email";
import Dashboard from "./pages/Dashboard";
const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/App.js",
  },
  {
    path: "/sendmail",
    name: "Send Email",
    icon: "nc-icon nc-circle-09",
    component: Email,
    layout: "/App.js",
  },



  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bell-55",
    component: Login,
    layout: "/App.js",
  },
];

export default dashboardRoutes;
