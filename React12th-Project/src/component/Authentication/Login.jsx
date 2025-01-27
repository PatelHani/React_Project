import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync } from "../../service/action/Authentication";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loginerr } = useSelector(state => state.AuthenticationReducer);
    const [inputs, setinputs] = useState({
        Email: "",
        Password: "",
    })
    const hendelChange = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAsync(inputs))
    }
    useEffect(() => {
        if (user) {
            navigate("/home")
        }
    }, [user]);
    if (loginerr) {
        setTimeout(() => {
            navigate("/")
        }, 4000);
    }
    return (
        <>
            <div className="mt-5 pt-5">
                <div className="containers">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center m-0 text-lime-300">Login</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="container1">
                    <div className="wrapper">
                        {loginerr ? <>
                            <div className="alert alert-danger" role="alert">
                                {loginerr}
                            </div>
                        </>
                            : ""}
                        <form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="email" placeholder="Email" name="Email" value={inputs.Email} onChange={hendelChange} required />
                                <i className='bx bxs-user'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Password" name="Password" value={inputs.Password} onChange={hendelChange} required />
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <button type="submit" className="btn">Login</button>
                            <div className="register-link">
                                <p>Don't have an account? <Link to="/">Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;