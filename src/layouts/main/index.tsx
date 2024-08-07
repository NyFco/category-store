import { FC } from "react";
import { MainRouter } from "../../routers";
import routes from "../../routers/main/routes";
import styles from "./MainLayout.module.scss";

const MainLayout: FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <MainRouter routes={routes} />
      </section>

      <aside className={styles.sidebar}>
        {/* TODO: Convert the list into a component */}
        <ul className={styles.sidebarList}>
          {routes.map((route) => (
            <li key={route.to} className={styles.sidebarItem}>
              <a href={route.to} className={styles.sidebarLink}>
                {route.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
};
export default MainLayout;
