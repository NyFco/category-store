import { FC } from "react";
import { AllCategoriesPage } from "../../pages";

export type Route = {
  title: string;
  element: FC;
  to: string;
};

const routes: Route[] = [
  {
    // TODO: Move the statics to the locale folder
    title: "All of the pages",
    element: AllCategoriesPage,
    to: "/",
  },
];

export default routes;
