export default function newUser() {
    return (
        <div className=" w-screen h-screen flex flex-col items-center justify-center border-2 border-white radious ">
            <h1>New User</h1>
            <form action="">
                <input type="text" placeholder="Username" />
                <br />
                <input type="text" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="password" placeholder="confirm Password" />
                <br />
                <button>Submit</button>
            </form>

            <p>Already have an account? <a href="http://localhost:3000/login">Sign in here</a>.</p>
        </div>
    );
}