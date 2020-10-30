import Authentication from "../layouts/authentication/Authentication";
import { lazy } from "react";
import Dashboard from "../layouts/dashboard/Dashboard";
import ErrorLayout from "../layouts/errors/ErrorLayout";

export const publicRoutes = [
  {
    layout: Authentication,
    subroutes: [
      {
        key: "login",
        path: "/auth/login",
        exact: true,
        component: lazy(() => import("../containers/login/Login")),
      },
      {
        key: "register",
        path: "/auth/register",
        exact: true,
        component: lazy(() => import("../containers/register/Register")),
      },
 
    ],
  },
  {
    layout: ErrorLayout,
    subroutes: [
      {
        key: "errror 404",
        exact: true,
        path: "/errors/error404",
        component: lazy(() => import("../containers/Error404/Error404")),
      },
      {
        key: "errror 403",
        exact: true,
        path: "/errors/error403",
        component: lazy(() => import("../containers/Error403/Error403")),
      },
    ],
  },
];
export const privateRoutes = [
  {
    layout: Dashboard,
    subroutes: [
      {
        key: "mistake",
        exact: true,
        path: "/management/mistakes",
        component: lazy(() => import("../containers/Mistakes/Mistakes")),
      },
      {
        key: "reports",
        exact: true,
        path: "/management/daily-reports",
        component: lazy(() => import("../containers/Reports/Reports")),
      },
      {
        key: "item",
        exact: true,
        path: "/management/profile",
        component: lazy(() => import("../containers/Profile/Profile")),
      }
      
    ],
  },
];
export const privateRouteAdmin = [
  {
    layout: Dashboard,
    subroutes: [
      {
        key: "fdsdfs",
        exact: true,
        path: "/management/users",
        component: lazy(() => import("../containers/UserManagement/Usermanagement")),
      },
      {
        key: "sdfdsf",
        exact: true,
        path: "/management/groups",
        component: lazy(() => import("../containers/GroupManagement/GroupManagement")),
      },
      {
        key: "sdfdsassf",
        exact: true,
        path: "/management/daily-reports-admin",
        component: lazy(() => import("../containers/DailyReportManagement/DailyReportManagement")),
      },
      {
        key: "itema",
        exact: true,
        path: "/management/profile-admin",
        component: lazy(() => import("../containers/Profile/Profile")),
      }
    ],
  },
];
