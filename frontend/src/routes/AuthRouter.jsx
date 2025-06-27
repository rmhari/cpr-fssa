import React from "react";

const Landing = React.lazy(() => import("../pages/Landing"));

const AuthRoutes = {
  path: "/",
  element: <Landing />,
};

export default AuthRoutes;
