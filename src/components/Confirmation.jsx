import {useLocation} from "react-router-dom"

export default function Confirmation() {

    const { state } = useLocation();
    const { firstName, lastName, email} = state.user;
    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>{firstName} {lastName}, you're now registered for SchoolHacks.</p>
            {email ?
                <p>We've sent more details to <strong>{email}</strong></p>
                :
                null
            }

        </div>
    );
}
