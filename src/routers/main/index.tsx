import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainRouterProps from "./props";

const MainRouter: FC<MainRouterProps> = ({ routes }) => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.to} element={<route.element />} key={route.to} />
        ))}
      </Routes>
    </Router>
  );
};

export default MainRouter;
