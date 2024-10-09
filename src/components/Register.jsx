import {useRef} from "react";
import {useNavigate} from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);


    function handleSubmit(event) {
        const user = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value
        }
        event.preventDefault();
        navigate("/confirmed", {state: {user}})

    }

    return (
        <div className="container">
            <h1>Register for SchoolHacks next Workshop</h1>
            <p>
                Make sure to grab your spot for this year's workshop! We love
                technology and consistently work towards being the premier provider of
                workshops and events that interest our students.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input required type="text" name="firstName" ref={firstNameRef}/>
                </label>
                <label>
                    Last Name:
                    <input required type="text" name="lastName" ref={lastNameRef}/>
                </label>
                <label>
                    Email:
                    <input required type="text" name="email" ref={emailRef}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
