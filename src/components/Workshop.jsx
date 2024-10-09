import {NavLink, Outlet, useParams} from "react-router-dom";
import {getWorkshop} from "../api";

export default function Workshop() {
    const {workId} = useParams();
    const workshop = getWorkshop(workId);

    return (
        <>
            <h2>{workshop.name} Sessions</h2>

            <ul className="session-list">
                {workshop?.sessions.map(session => (
                    <li className="session" key={session.id}>
                        <NavLink
                            className={({ isActive }) => isActive ? "session-active" : null}
                            to={session.id}>
                            <p className="session-name">{session.name}</p>
                            <p>
                                {session.speaker.name} | {session.speaker.org}
                            </p>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </>
    );
}
