import { Outlet, NavLink, Link } from "react-router-dom";
import { getWorkshops } from "../api";

export default function Workshops() {
  const workshops = getWorkshops();
  return (
      <div className="container">
          <h1>Workshop Categories</h1>

          <ul className="workshops">
              {workshops.map(cat => (
                  <li key={cat.id}>
                      <NavLink
                          className={({ isActive }) =>
                              isActive ? "workshop-active" : null
                          }
                          to={cat.id}
                      >
                          {cat.name}
                      </NavLink>
                  </li>
              ))}
          </ul>
          <Outlet />
      </div>
  );
}
