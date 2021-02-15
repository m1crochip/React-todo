// import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.text}>
        <NavLink
          exact
          to="react-todo/"
          activeClassName={styles.active}
          className={styles.box}
        >
          Home
        </NavLink>
        <NavLink
          to="react-todo/todo"
          activeClassName={styles.active}
          className={styles.box}
        >
          Todo
        </NavLink>
      </ul>
    </nav>
  );
}
