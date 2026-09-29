function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="heading">
                            Login Page
                        </h1>
                        <div className="col-body">
                            <input type="text" name='email' id='email' placeholder='Enter Your Email' />
                            <input type="password" name="pass" id="pass" placeholder='Enter Your Password' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
