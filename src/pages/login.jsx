
function Login(){
    return(
        <div>
            <h1>This is the login page</h1>
            <h3>Inicia Sesión</h3>
            <form action="" className='form'>
                <div>
                    <input type="email" required />
                    <input type="password" required />
                </div>
                <div>
                    <label htmlFor='remember_me'>
                        <input type="checkbox" name='remember_me'/>
                        Remember me
                    </label>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;