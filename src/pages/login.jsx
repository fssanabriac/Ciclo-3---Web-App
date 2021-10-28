
function Login(){
    return(
        <div>
            <h1>This is the login page</h1>
            <form action="" className='form'>
                <input type="email" />
                <input type="text" />
                <input typer='number' max={20}/>
                <input type="text" required/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;