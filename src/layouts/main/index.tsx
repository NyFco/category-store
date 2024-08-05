import { FC } from "react";
import { MainRouter } from "../../routers";
import routes from "../../routers/main/routes";

const MainLayout: FC = () => {
  return (
    <div>
      <aside>
        <ul>
          {routes.map((route) => (
            <li key={route.to}>
              <a href={route.to}>{route.title}</a>
            </li>
          ))}
        </ul>
      </aside>

      <section>
        <MainRouter routes={routes} />
      </section>
    </div>
  );
};
export default MainLayout;
