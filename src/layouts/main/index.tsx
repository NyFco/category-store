import { FC, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MainRouter } from "../../routers";
import routes from "../../routers/main/routes";
import styles from "./MainLayout.module.scss";
import { useCategory } from "../../hooks";

const MainLayout: FC = () => {
  const { getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <main className={styles.container}>
      <Router>
        <section className={styles.content}>
          <MainRouter routes={routes} />
        </section>

        <aside className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            {routes.map((route) => (
              <li key={route.to} className={styles.sidebarItem}>
                <Link to={route.to} className={styles.sidebarLink}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </Router>
    </main>
  );
};
export default MainLayout;
