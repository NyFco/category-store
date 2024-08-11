import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import MainRouterProps from "./props";

const MainRouter: FC<MainRouterProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.to} element={<route.element />} key={route.to} />
      ))}
    </Routes>
  );
};

export default MainRouter;
