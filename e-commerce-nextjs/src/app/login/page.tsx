export default function login() {
    return(
        <div>
            <h1>Log In</h1>
            <form action="" method="post">
                <input type="text" placeholder="Username" />
                <br />
                <input type="password" placeholder="Password"/>
                <br />
                <button>Login</button>
            </form>

            <p>Dont have an account? <a href="http://localhost:3000/newUser">Register here</a>.</p>
        </div>
    );
}