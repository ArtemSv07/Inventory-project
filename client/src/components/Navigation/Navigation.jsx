import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import PropTypes from "prop-types";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = ({ handleToggle }) => {
  return (
    <nav className={css.nav}>
      <NavLink
        onClick={() => handleToggle()}
        to="/orders"
        className={buildLinkClass}
      >
        ПРИХОД
      </NavLink>
      <NavLink
        onClick={() => handleToggle()}
        to="/products"
        className={buildLinkClass}
      >
        ПРОДУКТЫ
      </NavLink>

      <NavLink
        onClick={() => handleToggle()}
        to="/users"
        className={buildLinkClass}
      >
        ПОЛЬЗОВАТЕЛИ
      </NavLink>

      <NavLink
        onClick={() => handleToggle()}
        to="/settings"
        className={buildLinkClass}
      >
        НАСТРОЙКИ
      </NavLink>
    </nav>
  );
};

Navigation.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Navigation;
