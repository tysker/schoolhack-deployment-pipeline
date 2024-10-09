export function Login() {
    return (
        <div className="container">
            <form>
                <label>
                    Username:
                    <input required type="text" name="username" id="username"/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="text" id="password"/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

