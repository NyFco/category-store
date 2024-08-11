import { FC } from "react";
import { AllCategoriesPage, SelectedCategoriesPage } from "../../pages";

export type Route = {
  title: string;
  element: FC;
  to: string;
};

const routes: Route[] = [
  {
    title: "All",
    element: AllCategoriesPage,
    to: "/",
  },
  {
    title: "Selected",
    element: SelectedCategoriesPage,
    to: "/selected",
  },
];

export default routes;
